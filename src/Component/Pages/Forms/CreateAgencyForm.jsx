import React, { useState } from "react";
import { X } from "lucide-react";

export default function CreateAgencyForm({ setAgencyForm }) {
  const [formData, setFormData] = useState({
      Name :"",
    type:""
  });
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

  const handleSubmit = async(e) => {
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

    try{
      console.log("Submitting:", formData);

      const res = await fetch("http://localhost:5001/api/venderagencey",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(formData)
      });
      if(res.ok){
          alert("✅ Vendor created successfully!");
           setFormData({ 
     Name :"",
    type:""
  });
  setErrors({});
  setAgencyForm(false); //? Close the form after successful submission
      }else{
         alert("❌ Error sending request");
      }
    }catch(error){
      console.error("Submission Error--> ", error)
      alert("❌ An error occurred while submitting the form.");

    }

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
              Vendor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Name"
              placeholder="e.g., Kumar Book Store"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
              value={formData.Name || ""}
            />
            {renderError("Name")}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor type <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="type"
              placeholder="e.g., Electronics, Textiles"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
              onChange={handleChange}
              value={formData.type || ""}
            />
            {renderError("type")}
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