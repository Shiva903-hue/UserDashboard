import React from 'react';

export default function Deposit() {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl">
        
        {/* Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800">Deposit Slip</h2>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6">
          <div className="space-y-4 pt-2">
            
            {/* User Information */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">User Information</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Email
                </label>
                <input 
                  type="email" 
                  id="mail"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter user email"
                />
              </div>
            </div>

            {/* Deposit Details */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Deposit Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deposit ID
                  </label>
                  <input 
                    type="text" 
                    id="ds_id"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter deposit ID"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount
                  </label>
                  <input 
                    type="number" 
                    id="d_amount"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter amount"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Mode of Deposit
                </label>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="Cash" 
                      name="mode" 
                      value="Cash"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="Cash" className="ml-3 text-sm font-medium text-gray-700">
                      Cash
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="Online" 
                      name="mode" 
                      value="Online"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="Online" className="ml-3 text-sm font-medium text-gray-700">
                      Online
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="Rtgs" 
                      name="mode" 
                      value="Rtgs"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label htmlFor="Rtgs" className="ml-3 text-sm font-medium text-gray-700">
                      RTGS
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor & Bill Information */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Additional Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vendor Name
                  </label>
                  <input 
                    type="text" 
                    id="v_name"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter vendor name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deposit Bill No
                  </label>
                  <input 
                    type="text" 
                    id="d_bill"
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Enter bill number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deposit Status
                </label>
                <input 
                  type="text" 
                  id="d_status"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Enter deposit status"
                />
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
    </div>
  );
}

