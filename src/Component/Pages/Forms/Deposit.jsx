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
    "2000": "",
    "500": "",
    "200": "",
    "100": "",
    "50": "",
    "20": "",
    "10": "",
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
        ["ds_id", "d_amount", "cheque_number", "dd_number", "dd_amount"].includes(
          name
        ) &&
        !/^\d+$/.test(value)
      ) {
        error = "Only numbers are allowed";
      }
      if (["u_email"].includes(name) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email format";
      }
      if (["phone"].includes(name) && !/^\d{10}$/.test(value)) {
        error = "Must be a 10-digit number";
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

  const handleDenomination = (updatedNotes) => {
    let total = 0;
    Object.entries(updatedNotes).forEach(([note, count]) => {
      const quantity = parseInt(count) || 0;
      total += quantity * parseInt(note);
    });
    setTotalAmount(total);
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
      alert("Please fix validation errors before submitting.");
      return;
    }

    alert("✅ Deposit submitted successfully!");
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="w-full px-4 md:px-12 bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">Deposit Slip</h2>
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

          {/* Deposit Details */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
              Deposit Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deposit ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ds_id"
                  value={formData.ds_id}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                Mode of Deposit <span className="text-red-500">*</span>
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
                <option value="Online">Online</option>
                <option value="Cheque">Cheque</option>
                <option value="RTGS">RTGS</option>
              </select>
              {renderError("mode")}
            </div>

            {/* Cash Notes */}
            {formData.mode === "Cash" && (
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Cash Denomination Breakdown  <span className="text-red-500">*</span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.keys(cashNotes).map((note) => (
                    <div key={note}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ₹{note} Notes
                      </label>
                      <input
                        type="number"
                        value={cashNotes[note]}
                        onChange={(e) => {
                          const updatedNotes = {
                            ...cashNotes,
                            [note]: e.target.value,
                          };
                          setCashNotes(updatedNotes);
                          handleDenomination(updatedNotes);
                        }}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        min="0"
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col flex-wrap ">
                  <strong>Total </strong>
                  <span className="p-4 w-60 font-bold bg-green-200 rounded-lg border border-green-600">
                    ₹ {totalAmount}
                  </span>
                </div>
              </div>
            )}

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

            {/* RTGS Section */}
            {formData.mode === "RTGS" && (
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    RTGS Number <span className="text-red-500">*</span>
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

          {/* Demand Draft Section */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
              Demand Draft
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DD Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="dd_number"
                  value={formData.dd_number}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                {renderError("dd_number")}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DD Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dd_date"
                  value={formData.dd_date}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                {renderError("dd_date")}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  DD Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="dd_amount"
                  value={formData.dd_amount}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                {renderError("dd_amount")}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all font-medium shadow-sm"
            >
              Apply Deposit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}