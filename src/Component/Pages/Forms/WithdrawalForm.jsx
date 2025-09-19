// import React, { useState } from "react";

// export default function WithdrawalForm() {
//   const [mode, setMode] = useState("");
//   const [bank, setBank] = useState("");
//   const [chequeDetails, setChequeDetails] = useState({
//     number: "",
//     amount: "",
//     date:""
//   });
  

//   return (
//     <div className="p-6 min-h-screen bg-gray-50">
//       <div className="w-full px-4 md:px-12 bg-white rounded-2xl shadow-xl">
//         {/* Header */}
//         <div className="border-b border-gray-100 px-6 py-4">
//           <h2 className="text-2xl font-bold text-gray-800">Withdrawal Slip</h2>
//         </div>

//         <div className="px-6 pb-6 space-y-6 pt-2">
//           {/* User Information */}
//           <div className="bg-gray-50 rounded-lg p-4 space-y-4">
//             <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
//               User Information
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   User Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter user email"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Withdrawal Details */}
//           <div className="bg-gray-50 rounded-lg p-4 space-y-4">
//             <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
//               Withdrawal Details
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Withdrawal ID
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter withdrawal ID"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Amount
//                 </label>
//                 <input
//                   type="number"
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter amount"
//                   min="0"
//                   step="0.01"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Select Bank
//                 </label>
//                 <select
//                   value={bank}
//                   onChange={(e) => setBank(e.target.value)}
//                   className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   required
//                 >
//                   <option value="">Choose Bank</option>
//                   <option value="HDFC">HDFC</option>
//                   <option value="BOB">BOB</option>
//                   <option value="SBI">SBI</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Mode of Withdrawal
//               </label>
//               <select
//                 value={mode}
//                 onChange={(e) => setMode(e.target.value)}
//                 className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 required
//               >
//                 <option value="">Select Mode</option>
//                 <option value="Cash">Cash</option>
//                 <option value="Cheque">Cheque</option>
//               </select>
//             </div>

//             {mode === "Cheque" && (
//               <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Cheque Number
//                   </label>
//                   <input
//                     type="text"
//                     value={chequeDetails.number}
//                     onChange={(e) =>
//                       setChequeDetails({
//                         ...chequeDetails,
//                         number: e.target.value,
//                       })
//                     }
//                     className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Date
//                   </label>
//                   <input
//                     type="date"
//                     value={chequeDetails.date}
//                     onChange={(e) =>
//                       setChequeDetails({
//                         ...chequeDetails,
//                         date: e.target.value,
//                       })
//                     }
//                     className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     required
//                   />
//                 </div>
//               </div>
//             )}

//             {/* Submit Button */}
//             <div className="pt-4">
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all font-medium shadow-sm"
//               >
//                 Apply Deposit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       //{" "}
//     </div>
//   );
// }


import React, { useState } from "react";

export default function WithdrawalForm() {
  const [formData, setFormData] = useState({
    u_email: "",
    w_id: "",
    w_amount: "",
    bank: "",
    mode: "",
    cheque_number: "",
    cheque_date: "",
  });

  const [errors, setErrors] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    let error = "";

    if (!value) {
      error = "This field is required";
    } else {
      if (["w_id", "w_amount", "cheque_number"].includes(name) && !/^\d+$/.test(value)) {
        error = "Only numbers are allowed";
      }
      if (["u_email"].includes(name) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format";
      }
      if (["bank"].includes(name) && !/^[a-zA-Z\s]+$/.test(value)) {
        error = "Only alphabets are allowed";
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

  const renderError = (name) =>
    errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>;

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    Object.entries(formData).forEach(([name, value]) => {
      if (!validateField(name, value)) {
        isValid = false;
      }
    });

    if (!isValid) {
      alert("❌ Please fix validation errors before submitting.");
      return;
    }

    alert("✅ Withdrawal submitted successfully!");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="w-full px-4 md:px-12 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">Withdrawal Slip</h2>
        </div>

        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-6 pt-2">
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
                  value={formData.u_email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter user email"
                  required
                />
                {renderError("u_email")}
              </div>
            </div>
          </div>

          {/* Withdrawal Details */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
              Withdrawal Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Withdrawal ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="w_id"
                  value={formData.w_id}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter withdrawal ID"
                  required
                />
                {renderError("w_id")}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="w_amount"
                  value={formData.w_amount}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter amount"
                  required
                />
                {renderError("w_amount")}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Bank <span className="text-red-500">*</span>
                </label>
                <select
                  name="bank"
                  value={formData.bank}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Choose Bank</option>
                  <option value="HDFC">HDFC</option>
                  <option value="BOB">BOB</option>
                  <option value="SBI">SBI</option>
                </select>
                {renderError("bank")}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mode of Withdrawal <span className="text-red-500">*</span>
              </label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Mode</option>
                <option value="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
              </select>
              {renderError("mode")}
            </div>

            {/* Cheque Section */}
            {formData.mode === "Cheque" && (
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cheque Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="cheque_number"
                    value={formData.cheque_number}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  {renderError("cheque_number")}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="cheque_date"
                    value={formData.cheque_date}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                  {renderError("cheque_date")}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all font-medium shadow-sm"
            >
              Apply Withdrawal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
