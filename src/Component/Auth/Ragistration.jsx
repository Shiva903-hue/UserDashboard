import React, { useState } from "react";
import toast,{ Toaster } from "react-hot-toast";
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
  //     const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


const handleSubmit = (e) => {
  e.preventDefault();
  setError(""); 

  if (password === formData.a_paswd) {
    console.log("Passwords Match. Registration Data:", formData);

    //* Toast
     toast.success("✅ Registration Successful! Go to login...", {
        duration: 3000, 
      }); 
    // make an API call here.

  
    setFormData({
      a_name: "",
      a_email: "",
      a_mob_no: "",
      a_paswd: "",
      role: "",
    });
    setPassword("");


  } else {
   
    //* Toast
     toast.error(" Password Dosn`t Match.", {
        duration: 3000, 
      });
    setError("Password is not match");
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <Toaster/>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Ragistration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Name
            </label>
            <input
              type="text"
              name="a_name"
              value={formData.a_name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Email
            </label>
            <input
              type="email"
              name="a_email"
              value={formData.a_email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Mobile no */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Moblie no
            </label>
            <input
              type="number"
              name="a_mob_no"
              value={formData.a_mob_no}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              User Type
            </label>
            <select
              name="role"
              onChange={handleChange}
              value={formData.role}
              id="role"
              className="w-full p-2 bg-gray-100 border border-gray-200 rounded-md"
            >
              <option value=""> -- Select Type -- </option>
              <option value="Admin"> Admin </option>
              <option value="Supervisor"> Supervisor </option>
              <option value="Banker"> Banker </option>
              <option value="User"> User </option>
            </select>
          </div>
          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="a_paswd"
              value={formData.a_paswd}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>
        <Link to="/" className="text-center">
          <span className=" text-blue-500  text-center">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Ragistration;
