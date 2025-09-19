import React, { useState } from 'react';

export default function Deposit() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [mode, setMode] = useState('');
  const [bank, setBank] = useState('');
  const [cashNotes, setCashNotes] = useState({
    '2000': '', '500': '', '200': '', '100': '', '50': '', '20': '', '10': ''
  });
  const [chequeDetails, setChequeDetails] = useState({ number: '', amount: '' , date:''});
  const [ddDetails, setDdDetails] = useState({ number: '', date: '', amount: '' });

  //Denomination calculation
  const handleDenomination = (updatedNotes) => {
    let total = 0;
    Object.entries(updatedNotes).forEach(([note, count]) => {
      const quantity = parseInt(count) || 0;
      total += quantity * parseInt(note);
    });
    setTotalAmount(total);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="w-full px-4 md:px-12 bg-white rounded-2xl shadow-xl">

        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-800">Deposit Slip</h2>
        </div>

        <div className="px-6 pb-6 space-y-6 pt-2">

          {/* User Information */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">User Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">User Email</label>
                <input
                  type="email"
                  id="mail"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter user email"
                  required
                />
              </div>
            </div>
          </div>

          {/* Deposit Details */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Deposit Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deposit ID</label>
                <input
                  type="text"
                  id="ds_id"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter deposit ID"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input
                  type="number"
                  id="d_amount"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank</label>
                <select
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Choose Bank</option>
                  <option value="HDFC">HDFC</option>
                  <option value="BOB">BOB</option>
                  <option value="SBI">SBI</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mode of Deposit</label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select Mode</option>
                <option value="Cash">Cash</option>
                <option value="Online">Online</option>
                <option value="Cheque">Cheque</option>
                <option value="RTGS">RTGS</option>
              </select>
            </div>

            {/* Cash Note Breakdown */}
            {mode === 'Cash' && (
              <div className="pt-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Cash Denomination Breakdown</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.keys(cashNotes).map((note) => (
                    <div key={note}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">₹{note} Notes</label>
                      <input
                        type="number"
                        value={cashNotes[note]}
                        onChange={(e) => {
                          const updatedNotes = { ...cashNotes, [note]: e.target.value };
                          setCashNotes(updatedNotes);
                          handleDenomination(updatedNotes);
                        }}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                        min="0"
                      />
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col flex-wrap ">
                  
                    <strong>Total </strong> 
                    <span className='p-4 w-60 font-bold bg-green-200 rounded-lg border border-green-600'>₹  {totalAmount}</span>
                  
                </div>
              </div>
            )}

            {/* Cheque Details */}
            {mode === 'Cheque' && (
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cheque Number</label>
                  <input
                    type="text"
                    value={chequeDetails.number}
                    onChange={(e) =>
                      setChequeDetails({ ...chequeDetails, number: e.target.value })
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={chequeDetails.date}
                    onChange={(e) =>
                      setChequeDetails({ ...chequeDetails, date: e.target.value })
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}

            {/* RTGS Details */}
            {mode === 'RTGS' && (
              <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cheque Number</label>
                  <input
                    type="text"
                    value={chequeDetails.number}
                    onChange={(e) =>
                      setChequeDetails({ ...chequeDetails, number: e.target.value })
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                 
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={chequeDetails.date}
                    onChange={(e) =>
                      setChequeDetails({ ...chequeDetails, date: e.target.value })
                    }
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            )}

          </div>

          {/* Demand Draft Section */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Demand Draft</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">DD Number</label>
                <input
                  type="text"
                  value={ddDetails.number}
                  onChange={(e) =>
                    setDdDetails({ ...ddDetails, number: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">DD Date</label>
                <input
                  type="date"
                  value={ddDetails.date}
                  onChange={(e) =>
                    setDdDetails({ ...ddDetails, date: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">DD Amount</label>
                <input
                  type="number"
                  value={ddDetails.amount}
                  onChange={(e) =>
                    setDdDetails({ ...ddDetails, amount: e.target.value })
                  }
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  step="0.01"
                />
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

        </div>
      </div>
    </div>
  );
}