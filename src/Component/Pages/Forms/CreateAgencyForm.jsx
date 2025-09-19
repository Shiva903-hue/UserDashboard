import React, { useState } from "react";
import { X } from "lucide-react";

export default function CreateAgencyForm({ setAgencyForm }) {

  const [VValue, setInputValue] = useState({
    Name: "",
    type: ""
  });
  const handleChange = (e) => {
    setInputValue({
      ...VValue, [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    //send request to backend
    const res = await fetch("http://localhost:5001/api/venderagencey", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(VValue),

    });
    if (res.ok) {
      alert("Request Sent Successfully");
      setInputValue({
        Name: "",
        type: ""
      });
    } else {
      alert("Sending Error");
    }

  };



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

        <form onSubmit={handleSubmit} className="space-y-3">


          Vendor Name <input
            type="text"
            name="Name"
            value={VValue.Name}
            onChange={handleChange}
            id="name"
            className="w-full p-2 border rounded"
            required
          />
          Vendor Type<input
            type="text"
            id="type"
            name="type"
            value={VValue.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />




          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create Agency
          </button>
        </form>
      </div>
    </div>
  );
}
