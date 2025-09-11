import React, { useEffect, useState } from "react";
import { CheckCircle, RefreshCw } from "lucide-react";
import StatusCard from "../Card/StatusCard";

export default function StatusView() {
  const [statusData, setStatusData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchStatusData = async () => {
    try {
      const res = await fetch("http://localhost:5000/requests");
      const data = await res.json();
      setStatusData(data);
    } catch (error) {
      console.error("Error fetching processed vouchers:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchStatusData();
  };

  useEffect(() => {
    fetchStatusData();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading processed vouchers...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Processed Vouchers
        </h1>
        <button
          onClick={handleRefresh}
          disabled={refreshing}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <RefreshCw 
            className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} 
          />
          {refreshing ? 'Refreshing...' : 'Refresh'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statusData.map((voucher) => (
          <StatusCard key={voucher.id} voucherData={voucher} />
        ))}
      </div>

      {statusData.length === 0 && (
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500 text-lg">No Requests Sends</p>
        </div>
      )}
    </div>
  );
}