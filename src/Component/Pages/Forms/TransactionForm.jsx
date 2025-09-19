import React, { useState } from "react";

export default function TransactionForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value, type) => {
    let error = "";

    if (!value) {
      error = "This field is required";
    } else {
      if (type === "number" && !/^\d+$/.test(value)) {
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

    console.log("Submitting:", formData);
    alert("✅ Transaction submitted!");
  };

  return (
    <div className="w-full px-4 md:px-12 bg-white p-6 rounded-2xl shadow-xl">
      {/* Header */}
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Transaction Form</h2>
      </div>

      <div onSubmit={handleSubmit}>
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
                  name="userEmail"
                  placeholder="User Email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.userEmail || ""}
                />
                {errors.userEmail && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.userEmail}
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
                  name="Va_ID"
                  placeholder="Voucher ID"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.Va_ID || ""}
                />
                {errors.Va_ID && (
                  <p className="text-red-500 text-sm mt-1">{errors.Va_ID}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Product_Name"
                  placeholder="Product Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.Product_Name || ""}
                />
                {errors.Product_Name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Product_Name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="Product_Amount"
                  placeholder="Product Amount"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.Product_Amount || ""}
                />
                {errors.Product_Amount && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Product_Amount}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Status"
                  placeholder="Status"
                  value="APPROVED"
                  className="w-full p-3 font-bold border text-green-600 bg-green-100 border-green-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="T_number"
                  placeholder="Enter Transaction ID"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.T_number || ""}
                />
                {errors.T_number && (
                  <p className="text-red-500 text-sm mt-1">{errors.T_number}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="T_type"
                  placeholder="Enter Transaction Type"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.T_type || ""}
                />
                {errors.T_type && (
                  <p className="text-red-500 text-sm mt-1">{errors.T_type}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="Transaction_details"
                  placeholder="Enter Transaction details"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.Transaction_details || ""}
                />
                {errors.Transaction_details && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Transaction_details}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Mode of Deposit <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Cash"
                      name="mode"
                      value="Cash"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      onChange={handleChange}
                      checked={formData.mode === "Cash"}
                      required
                    />
                    <label
                      htmlFor="Cash"
                      className="ml-3 text-sm font-medium text-gray-700"
                    >
                      Cash
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="Online"
                      name="mode"
                      value="Online"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      onChange={handleChange}
                      checked={formData.mode === "Online"}
                      required
                    />
                    <label
                      htmlFor="Online"
                      className="ml-3 text-sm font-medium text-gray-700"
                    >
                      Online
                    </label>
                  </div>
                </div>
                {errors.mode && (
                  <p className="text-red-500 text-sm mt-1">{errors.mode}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vendor Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="Vendor_Name"
                  placeholder="Enter Vendor Name"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.Vendor_Name || ""}
                />
                {errors.Vendor_Name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Vendor_Name}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Transaction Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="T_amount"
                  placeholder="Enter Transaction Amount"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.T_amount || ""}
                />
                {errors.T_amount && (
                  <p className="text-red-500 text-sm mt-1">{errors.T_amount}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Voucher Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="voucherDate"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.voucherDate || ""}
                />
                {errors.voucherDate && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.voucherDate}
                  </p>
                )}
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
    </div>
  );
}