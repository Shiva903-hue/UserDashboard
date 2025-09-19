import React, { useState } from "react";
import { X } from "lucide-react";

export default function VendorEntryForm({ setVendorForm }) {
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
      if (name.toLowerCase().includes("name") || name === "Owner" || name === "Manager") {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Only alphabets are allowed";
        }
      }
      if (name.toLowerCase().includes("phone")) {
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
    alert("✅ Vendor created successfully!");
  };

  const renderError = (name) =>
    errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="relative w-full max-w-2xl max-h-[95vh] bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Create Vendor</h2>
          <button
            type="button"
            onClick={() => setVendorForm(false)}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6 max-h-[calc(95vh-80px)] overflow-y-auto">
          <div className="space-y-4 pt-2">
            {/* User Information */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">User Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Enter User Email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.userEmail || ""}
                />
                {renderError("userEmail")}
              </div>
            </div>

            {/* Vendor Details */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Vendor Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vendor ID <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="V_id"
                    placeholder="Vendor ID"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleChange}
                    value={formData.V_id || ""}
                  />
                  {renderError("V_id")}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vendor Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="V_name"
                    placeholder="Vendor Name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleChange}
                    value={formData.V_name || ""}
                  />
                  {renderError("V_name")}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  GST Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="GST_no"
                  placeholder="Enter GST Number"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleChange}
                  value={formData.GST_no || ""}
                />
                {renderError("GST_no")}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vendor Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="V_email"
                    placeholder="Enter Vendor Email"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleChange}
                    value={formData.V_email || ""}
                  />
                  {renderError("V_email")}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vendor Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="V_phone"
                    placeholder="Enter Vendor Phone"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleChange}
                    value={formData.V_phone || ""}
                  />
                  {renderError("V_phone")}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vendor Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="V_address"
                  placeholder="Enter Vendor Address"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  rows="3"
                  required
                  onChange={handleChange}
                  value={formData.V_address || ""}
                />
                {renderError("V_address")}
              </div>
            </div>

            {/* Bank Information */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Bank Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Bank_id"
                    placeholder="Bank Account Number"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleChange}
                    value={formData.Bank_id || ""}
                  />
                  {renderError("Bank_id")}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    IFSC Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="IFSC"
                    placeholder="Bank IFSC Code"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleChange}
                    value={formData.IFSC || ""}
                  />
                  {renderError("IFSC")}
                </div>
              </div>
            </div>

            {/* Company Personnel (Op) */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Company Personnel (Op)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Firm Owner <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Owner"
                    placeholder="Firm Owner Name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleChange}
                    value={formData.Owner || ""}
                  />
                  {renderError("Owner")}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Firm Manager <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="Manager"
                    placeholder="Firm Manager Name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleChange}
                    value={formData.Manager || ""}
                  />
                  {renderError("Manager")}
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
                Create Vendor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}