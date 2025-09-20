import { useState } from "react";

export default function VoucherForm() {
  const [formData, setFormData] = useState({
    va_id: "",
    u_email: "",
    v_date: "",
    p_name: "",
    p_rate: "",
    P_amount: "",
    P_quantity: "",
    mobile: "",
    Vendor_Name: "",
    vandro_ID: "",
    v_status: false,
  });

  const [errors, setErrors] = useState({});

  // Your original logic
  const validateField = (name, value, type) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else {
      if (type === "number" && !/^\d+$/.test(value)) {
        error = "Only numbers are allowed";
      }
      if (name.toLowerCase().includes("mobile") || name.toLowerCase().includes("phone")) {
        if (!/^\d{10}$/.test(value)) {
          error = "Enter a valid 10-digit number";
        }
      }
      if (name.toLowerCase().includes("name")) {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Only alphabets are allowed";
        }
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value, type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    Object.entries(formData).forEach(([name, value]) => {
      const inputType = typeof value === "number" ? "number" : "text";
      if (!validateField(name, value, inputType)) {
        isValid = false;
      }
    });

    if (!isValid) {
      alert("Please fix validation errors before submitting.");
      return;
    }
    const res = await fetch("http://localhost:5001/api/voucher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("✅ Request sent successfully!");
      setFormData({
        va_id: "", u_email: "", v_date: "", p_name: "", p_rate: "",
        P_amount: "", P_quantity: "", mobile: "", Vendor_Name: "",
        vandro_ID: "", v_status: false,
      });
      setErrors({});
    } else {
      alert("Error sending request");
    }
  };

  return (
    <div className="w-full px-4 md:px-8 bg-white p-6 rounded-2xl shadow-xl">
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Send Request</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* THIS IS NOW YOUR EXACT MANUAL STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Voucher ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Voucher ID <span className="text-red-500">*</span></label>
            <input type="number" name="va_id" value={formData.va_id} onChange={handleChange} placeholder="Voucher ID" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.va_id ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.va_id && <p className="text-red-500 text-sm mt-1">{errors.va_id}</p>}
          </div>
          {/* User Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User Email <span className="text-red-500">*</span></label>
            <input type="email" name="u_email" value={formData.u_email} onChange={handleChange} placeholder="User Email" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.u_email ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.u_email && <p className="text-red-500 text-sm mt-1">{errors.u_email}</p>}
          </div>
          {/* Voucher Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Voucher Date <span className="text-red-500">*</span></label>
            <input type="date" name="v_date" value={formData.v_date} onChange={handleChange} required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.v_date ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.v_date && <p className="text-red-500 text-sm mt-1">{errors.v_date}</p>}
          </div>
          {/* Vendor ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vendor ID <span className="text-red-500">*</span></label>
            <input type="number" name="vandro_ID" value={formData.vandro_ID} onChange={handleChange} placeholder="Vendor ID" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.vandro_ID ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.vandro_ID && <p className="text-red-500 text-sm mt-1">{errors.vandro_ID}</p>}
          </div>
          {/* Vendor Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vendor Name <span className="text-red-500">*</span></label>
            <input type="text" name="Vendor_Name" value={formData.Vendor_Name} onChange={handleChange} placeholder="Vendor Name" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.Vendor_Name ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.Vendor_Name && <p className="text-red-500 text-sm mt-1">{errors.Vendor_Name}</p>}
          </div>
          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
            <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="10-digit mobile number" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.mobile ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name <span className="text-red-500">*</span></label>
            <input type="text" name="p_name" value={formData.p_name} onChange={handleChange} placeholder="Product Name" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.p_name ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.p_name && <p className="text-red-500 text-sm mt-1">{errors.p_name}</p>}
          </div>
          {/* Product Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Quantity <span className="text-red-500">*</span></label>
            <input type="number" name="P_quantity" value={formData.P_quantity} onChange={handleChange} placeholder="Quantity" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.P_quantity ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.P_quantity && <p className="text-red-500 text-sm mt-1">{errors.P_quantity}</p>}
          </div>
          {/* Product Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Rate <span className="text-red-500">*</span></label>
            <input type="number" name="p_rate" value={formData.p_rate} onChange={handleChange} placeholder="Rate" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.p_rate ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.p_rate && <p className="text-red-500 text-sm mt-1">{errors.p_rate}</p>}
          </div>
          {/* Product Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Product Amount <span className="text-red-500">*</span></label>
            <input type="number" name="P_amount" value={formData.P_amount} onChange={handleChange} placeholder="Amount" required className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${errors.P_amount ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"}`} />
            {errors.P_amount && <p className="text-red-500 text-sm mt-1">{errors.P_amount}</p>}
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium shadow-sm"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}