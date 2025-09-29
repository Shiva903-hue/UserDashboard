import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Ragistration = () => {
  const [formData, setFormData] = useState({
    a_name: "",
    a_email: "",
    a_mob_no: "",
    a_paswd: "",
    role: "",
  });

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password === formData.a_paswd) {
      toast.success("✅ Registration Successful! Go to login...", {
        duration: 3000,
      });

      // API call placeholder

      setFormData({
        a_name: "",
        a_email: "",
        a_mob_no: "",
        a_paswd: "",
        role: "",
      });
      setPassword("");
    } else {
      toast.error("❌ Password doesn't match.", {
        duration: 3000,
      });
      setError("Passwords do not match.");
    }
  };

  return (
    <div className="p-2 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      <Toaster />
      <div className="w-full h-auto max-w-lg bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              User Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="a_name"
              value={formData.a_name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="a_email"
              value={formData.a_email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="a_mob_no"
              value={formData.a_mob_no}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="10-digit mobile number"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              User Type <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">-- Select Type --</option>
              <option value="Admin">Admin</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Banker">Banker</option>
              <option value="User">User</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="a_paswd"
              value={formData.a_paswd}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Re-enter password"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm font-medium text-center">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-blue-600 hover:underline font-medium">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ragistration;