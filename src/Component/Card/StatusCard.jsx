import { CheckCircle, Clock, XCircle } from "lucide-react";

export default function StatusCard({ voucherData }) {
  let statusLabel, statusColor, statusIcon, bgcolor;

  if (voucherData.status === null || voucherData.status === undefined) {
    statusLabel = "Pending";
    bgcolor = "bg-yellow-100 border-yellow-200";
    statusColor = "bg-yellow-200 text-yellow-700 border-yellow-300";
    statusIcon = <Clock className="w-4 h-4 mr-1.5" />;
  } else if (voucherData.status === true) {
    statusLabel = "Approved";
    bgcolor = "bg-green-50 border-green-200";
    statusColor = "bg-green-100 text-green-800 border-green-300";
    statusIcon = <CheckCircle className="w-4 h-4 mr-1.5" />;
  } else if (voucherData.status === false) {
    statusLabel = "Rejected";
    bgcolor = "bg-red-50 border-red-200";
    statusColor = "bg-red-100 text-red-800 border-red-300";
    statusIcon = <XCircle className="w-4 h-4 mr-1.5" />;
  } else {
    // Fallback for any unexpected status values
    statusLabel = "Pending";
    bgcolor = "bg-yellow-100 border-yellow-200";
    statusColor = "bg-yellow-200 text-yellow-700 border-yellow-300";
    statusIcon = <Clock className="w-4 h-4 mr-1.5" />;
  }

  return (
    <div className={`rounded-lg border-2 p-6 ${bgcolor} shadow-md hover:shadow-lg transition-shadow duration-200`}>
      {/* Header with Voucher ID and Status */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-500 mb-1">Voucher ID</span>
          <span className="text-lg font-bold text-gray-900">{voucherData.voucherId}</span>
        </div>
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold border ${statusColor}`}>
          {statusIcon}
          {statusLabel}
        </span>
      </div>

      {/* User ID */}
      <div className="mb-3">
        <span className="text-sm font-medium text-gray-500 block mb-1">User Email</span>
        <span className="text-base text-gray-800 font-medium">{voucherData.userEmail}</span>
      </div>

      {/* Name */}
       <div className="mb-4">
        <span className="text-sm font-medium text-gray-500 block mb-1">Name</span>
        <p className="text-base text-gray-700 leading-relaxed break-words overflow-wrap-anywhere max-h-32 overflow-y-auto">{voucherData.P_name}</p>
      </div>

  {/* Quantity */}
       <div className="mb-4">
        <span className="text-sm font-medium text-gray-500 block mb-1">Quantity</span>
        <p className="text-base text-gray-700 leading-relaxed break-words overflow-wrap-anywhere max-h-32 overflow-y-auto">{voucherData.P_quantity}</p>
      </div>

      {/* Rate */}
       <div className="mb-4">
        <span className="text-sm font-medium text-gray-500 block mb-1">Rate</span>
        <p className="text-base text-gray-700 leading-relaxed break-words overflow-wrap-anywhere max-h-32 overflow-y-auto">{voucherData.P_rate}</p>
      </div>

      {/* Amount */}
       <div className="mb-4">
        <span className="text-sm font-medium text-gray-500 block mb-1">Amouny</span>
        <p className="text-base text-gray-700 leading-relaxed break-words overflow-wrap-anywhere max-h-32 overflow-y-auto">{voucherData.P_amout}</p>
      </div>

    

      {/* Approved Date */}
      {voucherData.approvedDate && (
        <div className="pt-3 border-t border-gray-200">
          <span className="text-sm font-medium text-gray-500 block mb-1">
            {voucherData.status === true ? "Approved Date" : 
             voucherData.status === false ? "Rejected Date" : "Date"}
          </span>
          <span className="text-sm text-gray-600">
            {new Date(voucherData.approvedDate).toLocaleString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </div>
      )}
    </div>
  );
}