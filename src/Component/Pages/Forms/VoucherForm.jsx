import { useState } from "react";

export default function VoucherForm() {
  const [formData, setFormData] = useState({
    va_id :"",
    u_email: "",
    v_date: "",
    p_name: "",
    p_rate: "",
    P_amount: "",
    P_quantity: "",
    v_status: false // for showing v_status is pending
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //! Send request to backend
    const res = await fetch("http://localhost:5001/api/voucher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    
    });
  console.log("Submitting formData:", formData);

    if (res.ok) {
      alert("✅Request sent successfully!");
      setFormData({
        va_id: "",
        u_email: "",
        v_date: "",
         p_name: "",
        p_rate: "",
        P_amount: "",
        P_quantity: "",
        v_status: false,
      });
    } else {
      alert("Error sending request");
    }
  };

  return (
   <div className="w-full px-4 md:px-12 bg-white p-6 rounded-2xl shadow-xl">
  {/* Header */}
  <div className="border-b border-gray-100 pb-4 mb-6">
    <h2 className="text-2xl font-bold text-gray-800">Send Request</h2>
  </div>

  <div className="space-y-6">
    {/* Request Information */}
    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Request Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {/* Voucher ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Voucher ID</label>
          <input
            type="number"
            name="va_id"
            value={formData.va_id}
            onChange={handleChange}
            placeholder="Voucher ID"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>

        {/* User Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">User Email</label>
          <input
            type="email"
            name="u_email"
            value={formData.u_email}
            onChange={handleChange}
            placeholder="User Email"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>

        {/* Voucher Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Voucher Date</label>
          <input
            type="date"
            name="v_date"
            value={formData.v_date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>
      </div>
    </div>

    {/* Product Information */}
    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Product Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            name="p_name"
            value={formData.p_name}
            onChange={handleChange}
            placeholder="Enter Product Name"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>

        {/* Product Quantity */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Quantity</label>
          <input
            type="number"
            name="P_quantity"
            value={formData.P_quantity}
            onChange={handleChange}
            placeholder="Enter Product Quantity"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
            min="1"
          />
        </div>

        {/* Product Rate */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Rate</label>
          <input
            type="number"
            name="p_rate"
            value={formData.p_rate}
            onChange={handleChange}
            placeholder="Enter Product Rate"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
            min="0"
            step="0.01"
          />
        </div>

        {/* Product Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Amount</label>
          <input
            type="number"
            name="P_amount"
            value={formData.P_amount}
            onChange={handleChange}
            placeholder="Enter Product Amount"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
            min="0"
            step="0.01"
          />
        </div>
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