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

    // Validate all fields before submit
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
      setErrors({});
    } else {
      alert("Error sending request");
    }
  };

  const renderInput = ({ label, name, type = "text", placeholder, required = true }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
          errors[name] ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
        }`}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <div className="w-full px-4 md:px-12 bg-white p-6 rounded-2xl shadow-xl">
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Send Request</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Request Info */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Request Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderInput({ label: "Voucher ID", name: "va_id", type: "number", placeholder: "Voucher ID" })}
            {renderInput({ label: "User Email", name: "u_email", type: "email", placeholder: "User Email" })}
            {renderInput({ label: "Voucher Date", name: "v_date", type: "date" })}
          </div>
        </div>

        {/* Vendor Info */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Vendor Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderInput({ label: "Vendor ID", name: "vandro_ID", type: "number", placeholder: "Vendor ID" })}
            {renderInput({ label: "Vendor Name", name: "Vendor_Name", placeholder: "Vendor Name" })}
            {renderInput({ label: "Mobile Number", name: "mobile", placeholder: "10-digit mobile number" })}
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Product Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {renderInput({ label: "Product Name", name: "p_name", placeholder: "Product Name" })}
            {renderInput({ label: "Product Quantity", name: "P_quantity", type: "number", placeholder: "Quantity" })}
            {renderInput({ label: "Product Rate", name: "p_rate", type: "number", placeholder: "Rate" })}
            {renderInput({ label: "Product Amount", name: "P_amount", type: "number", placeholder: "Amount" })}
          </div>
        </div>

        {/* Submit */}
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