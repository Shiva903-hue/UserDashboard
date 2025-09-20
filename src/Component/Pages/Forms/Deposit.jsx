import React, { useState } from "react";

export default function Deposit() {
  const [formData, setFormData] = useState({
    u_email: "",
    ds_id: "",
    d_amount: "",
    bank: "",
    mode: "",
    cheque_number: "",
    cheque_date: "",
    dd_number: "",
    dd_date: "",
    dd_amount: "",
  });

  const [cashNotes, setCashNotes] = useState({
    2000: "",
    500: "",
    200: "",
    100: "",
    50: "",
    20: "",
    10: "",
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [errors, setErrors] = useState({});

  // Validation function
  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = "This field is required";
    } else {
      if (
        [
          "ds_id",
          "d_amount",
          "cheque_number",
          "dd_number",
          "dd_amount",
        ].includes(name) &&
        !/^\d+$/.test(value)
      ) {
        error = "Only numbers are allowed";
      }
      if (name === "u_email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format";
      }
      if (name === "bank" && !/^[a-zA-Z\s]+$/.test(value)) {
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

  const handleDenominationChange = (note, count) => {
    const updatedNotes = { ...cashNotes, [note]: count };
    setCashNotes(updatedNotes);

    let total = 0;
    Object.entries(updatedNotes).forEach(([noteValue, noteCount]) => {
      total += (parseInt(noteValue) || 0) * (parseInt(noteCount) || 0);
    });
    setTotalAmount(total);
  };

  const renderError = (name) =>
    errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Create a temporary list of required fields based on the mode
    const requiredFields = { ...formData };
    if (formData.mode !== "Cheque" && formData.mode !== "RTGS") {
      delete requiredFields.cheque_number;
      delete requiredFields.cheque_date;
    }

    Object.entries(requiredFields).forEach(([name, value]) => {
      if (!validateField(name, value)) {
        isValid = false;
      }
    });

    if (!isValid) {
      alert("Please fix validation errors before submitting.");
      return;
    }
    console.log(formData)
    alert("✅ Deposit submitted successfully!");
  };

  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-2xl shadow-xl">
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          Deposit Slip
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Information */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
            User Information
          </h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="u_email"
              value={formData.u_email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter user email"
              required
            />
            {renderError("u_email")}
          </div>
        </div>

        {/* Deposit Details */}
        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
            Deposit Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deposit ID <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="ds_id"
                value={formData.ds_id}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter deposit ID"
                required
              />
              {renderError("ds_id")}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="d_amount"
                value={formData.d_amount}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount"
                required
              />
              {renderError("d_amount")}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Bank <span className="text-red-500">*</span>
              </label>
              <select
                name="bank"
                value={formData.bank}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
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
              Mode of Deposit <span className="text-red-500">*</span>
            </label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Mode</option>
              <option value="Cash">Cash</option>
              <option value="Online">Online</option>
              <option value="Cheque">Cheque</option>
              <option value="RTGS">RTGS</option>
            </select>
            {renderError("mode")}
          </div>

          {formData.mode === "Cash" && (
            <div className="pt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Cash Denomination Breakdown
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Object.keys(cashNotes).map((note) => (
                  <div key={note}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ₹{note} Notes
                    </label>
                    <input
                      type="number"
                      value={cashNotes[note]}
                      onChange={(e) =>
                        handleDenominationChange(note, e.target.value)
                      }
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                      min="0"
                    />
                  </div>
                ))}
              </div>
              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <strong className="text-lg">Total:</strong>
                <span className="p-3 text-lg w-full sm:w-auto font-bold bg-green-100 text-green-800 rounded-lg border border-green-300">
                  ₹ {totalAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          )}

          {(formData.mode === "Cheque" || formData.mode === "RTGS") && (
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {formData.mode} Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Cheque Number"
                  name="cheque_number"
                  value={formData.cheque_number}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
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
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                {renderError("cheque_date")}
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-4">
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
            Demand Draft (Optional)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                DD Number
              </label>
              <input
                type="text"
                name="dd_number"
                placeholder="Enter Number"
                value={formData.dd_number}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {renderError("dd_number")}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                DD Date
              </label>
              <input
                type="date"
                name="dd_date"
                placeholder="date"
                value={formData.dd_date}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {renderError("dd_date")}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                DD Amount
              </label>
              <input
                type="text"
                name="dd_amount"
                placeholder="Enter Amount"
                value={formData.dd_amount}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {renderError("dd_amount")}
            </div>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium shadow-sm"
          >
            Apply Deposit
          </button>
        </div>
      </form>
    </div>
  );
}
