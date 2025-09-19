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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setAgencyForm(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-800">Create Agency</h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="V_type"
              placeholder="Vendor Type"
              className="w-full p-2 border rounded"
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
              placeholder="Vendor Name"
              className="w-full p-2 border rounded"
              required
              onChange={handleChange}
              value={formData.V_name || ""}
            />
            {renderError("V_name")}
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Agency
          </button>
        </div>
      </div>
    </div>
  );
}