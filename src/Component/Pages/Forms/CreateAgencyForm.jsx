import React from "react";
import { X } from "lucide-react";

export default function CreateAgencyForm({ setAgencyForm }) {
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

        <form className="space-y-3">
 

         Vendor Ttype <input
            type="text"
            name="V_name"
            placeholder="Vendor Type"
            className="w-full p-2 border rounded"
            required
          />


         Vendor Name <input
            type="text"
            name="V_name"
            placeholder="Vendor Name"
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
