import { useState } from "react";

export default function RequestForm() {
  const [formData, setFormData] = useState({
    voucherId: "",
    userEmail: "",
    voucherDate: "",
    P_name: "",
    P_rate: "",
    P_amount: "",
    P_quantity: "",
    status: null, // for showing status is pending
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send request to backend
    const res = await fetch("http://localhost:5000/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Request sent successfully!");
      setFormData({
        voucherId: "",
        userEmail: "",
        voucherDate: "",
        P_name: "",
        P_rate: "",
        P_amount: "",
        P_quantity: "",
        status: false,
      });
    } else {
      alert("Error sending request");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
      
      {/* Header */}
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">Send Request</h2>
      </div>

      <div className="space-y-4">
        
        {/* Request Information */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Request Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Voucher ID
              </label>
              <input 
                type="text"
                name="voucherId"
                placeholder="Voucher ID"
                value={formData.voucherId}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                User Email
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="User Email"
                value={formData.userEmail}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Voucher Date
            </label>
            <input
              type="date"
              name="voucherDate"
              value={formData.voucherDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>
        </div>

        {/* Product Information */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Product Details</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="P_name"
              placeholder="Enter Product Name"
              value={formData.P_name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Quantity
              </label>
              <input
                type="number"
                name="P_quantity"
                placeholder="Enter Product Quantity"
                value={formData.P_quantity}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
                min="1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Rate
              </label>
              <input
                type="number"
                name="P_rate"
                placeholder="Enter Product Rate"
                value={formData.P_rate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Amount
            </label>
            <input
              type="number"
              name="P_amount"
              placeholder="Enter Product Amount"
              value={formData.P_amount}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
              min="0"
              step="0.01"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all font-medium shadow-sm"
          >
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}