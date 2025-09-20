import React, { useState } from "react";
import { X } from "lucide-react";

export default function CreateAgencyForm({ setAgencyForm }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (!value) {
      error = "This field is required";
    } else {
      if (name.toLowerCase().includes("name") || name.toLowerCase().includes("type")) {
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = "Only alphabets are allowed";
        }
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    Object.entries(formData).forEach(([name, value]) => {
      if (!validateField(name, value)) {
        isValid = false;
      }
    });

    if (!isValid) {
      alert("Please fix validation errors before submitting.");
      return;
    }

    console.log("Submitting:", formData);
    alert("✅ Agency created successfully!");
  };

  const renderError = (name) =>
    errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <button
          type="button"
          onClick={() => setAgencyForm(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Create Agency</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="V_type"
              placeholder="e.g., Electronics, Textiles"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
              value={formData.V_type || ""}
            />
            {renderError("V_type")}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="V_name"
              placeholder="e.g., Kumar Book Store"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
              value={formData.V_name || ""}
            />
            {renderError("V_name")}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Create Agency
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}