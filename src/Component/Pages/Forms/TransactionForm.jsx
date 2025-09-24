import React, { useState } from "react";

export default function TransactionForm() {
  const [formData, setFormData] = useState({
    u_email: "",
    t_id:"",
    t_type: "",
    t_detail: "",
    t_date: "",
    t_amount: "",
    v_name: "",
    t_mode: "",
    Status: "APPROVED",

    va_id: "",
    p_name: "",
    P_amount: "",
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value, type) => {
    let error = "";

    if (!value) {
      error = "This field is required";
    } else {
      if (type === "number" && !/^\d*\.?\d*$/.test(value)) {
        error = "Only numbers are allowed";
      }

      if (name.toLowerCase().includes("name")) {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Only alphabets are allowed";
        }
      }
      
      if (
        name.toLowerCase().includes("phone") ||
        name.toLowerCase().includes("mobile")
      ) {
        if (!/^\d{10}$/.test(value)) {
          error = "Enter a valid 10-digit number";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    // Create a temporary errors object to check all fields
    const tempErrors = {};
    Object.entries(formData).forEach(([name, value]) => {
      const input = document.querySelector(`[name=${name}]`);
      const inputType = input ? input.type : 'text';
      if (!validateField(name, value, inputType)) {
        isValid = false;
        // This is redundant as validateField already sets errors
        // but can be useful for immediate feedback
        tempErrors[name] = errors[name] || "This field is required";
      }
    });

    if (!isValid) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    console.log("Submitting:", formData);
    alert("✅ Transaction submitted!");

  };

  return (
    <div className="w-full px-4 md:px-8 bg-white p-6 rounded-2xl shadow-xl">
      {/* Header */}
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Transaction Form</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* User Information */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
              User Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="u_email"
                  placeholder="User Email"
                  className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.u_email ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.u_email || ""}
                />
                {errors.u_email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.u_email}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Voucher Information */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
              Voucher Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Voucher ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="va_id"
                  placeholder="Voucher ID"
                  className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.va_id ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.va_id || ""}
                />
                {errors.va_id && (
                  <p className="text-red-500 text-sm mt-1">{errors.va_id}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="p_name"
                  placeholder="Product Name"
                   className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.p_name ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.p_name || ""}
                />
                {errors.p_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.p_name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="P_amount"
                  placeholder="Product Amount"
                  className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.P_amount ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.P_amount || ""}
                />
                {errors.P_amount && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.P_amount}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <input
                  type="text"
                  name="Status"
                  value="APPROVED"
                  className="w-full p-3 font-bold border text-green-600 bg-green-100 border-green-300 rounded-lg cursor-not-allowed"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
              Transaction Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="t_id"
                  placeholder="Enter Transaction ID"
                   className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.t_id ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.t_id || ""}
                />
                {errors.t_id && (
                  <p className="text-red-500 text-sm mt-1">{errors.t_id}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="t_type"
                  placeholder="e.g., Purchase, Payment"
                   className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.t_type ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.t_type || ""}
                />
                {errors.t_type && (
                  <p className="text-red-500 text-sm mt-1">{errors.t_type}</p>
                )}
              </div>

              <div className="md:col-span-2 lg:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Details
                </label>
                <textarea
                  name="t_detail"
                  placeholder="Enter Transaction details"
                  rows="3"
                  className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.t_detail ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  onChange={handleChange}
                  value={formData.t_detail || ""}
                />
                {errors.t_detail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.t_detail}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Mode of Deposit <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Cash"
                      name="t_mode"
                      value="Cash"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      onChange={handleChange}
                      checked={formData.t_mode === "Cash"}
                      required
                    />
                    <label
                      htmlFor="Cash"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Cash
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Online"
                      name="t_mode"
                      value="Online"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      onChange={handleChange}
                      checked={formData.t_mode === "Online"}
                      required
                    />
                    <label
                      htmlFor="Online"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Online
                    </label>
                  </div>
                </div>
                {errors.t_mode && (
                  <p className="text-red-500 text-sm mt-1">{errors.t_mode}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vendor Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="v_name"
                  placeholder="Enter Vendor Name"
                   className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.v_name ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.v_name || ""}
                />
                {errors.v_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.v_name}
                  </p>
                )}
              </div>
          
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="t_amount"
                  placeholder="Enter Transaction Amount"
                   className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.t_amount ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.t_amount || ""}
                />
                {errors.t_amount && (
                  <p className="text-red-500 text-sm mt-1">{errors.t_amount}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="t_date"
                   className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                    errors.t_date ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-blue-500"
                  }`}
                  required
                  onChange={handleChange}
                  value={formData.t_date || ""}
                />
                {errors.t_date && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.t_date}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all font-medium shadow-sm"
            >
              Submit Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}