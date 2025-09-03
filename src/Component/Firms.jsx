import React from "react";

export default function Firms() {
  const mockRows = [
    {
    id: 1,
    name: "Shree Ganesh Electronics",
    email: "ganesh.electronics@example.com",
    phone: 9876543210,
    address: "Nagpur, Maharashtra",
  },
  {
    id: 2,
    name: "Mehta Textiles",
    email: "mehta.textiles@example.com",
    phone: 9123456789,
    address: "Surat, Gujarat",
  },
  {
    id: 3,
    name: "Kumar Book Store",
    email: "kumar.books@example.com",
    phone: 9812345678,
    address: "Patna, Bihar",
  },
  {
    id: 4,
    name: "Bright Future Coaching",
    email: "brightfuture@example.com",
    phone: 9765432109,
    address: "Lucknow, Uttar Pradesh",
  },
  {
    id: 5,
    name: "Royal Bakers",
    email: "royal.bakers@example.com",
    phone: 9654321098,
    address: "Pune, Maharashtra",
  },
  {
    id: 6,
    name: "Delhi Furniture House",
    email: "delhifurniture@example.com",
    phone: 9543210987,
    address: "New Delhi",
  },
  {
    id: 7,
    name: "Techno World Computers",
    email: "techworld@example.com",
    phone: 9432109876,
    address: "Bengaluru, Karnataka",
  },
  {
    id: 8,
    name: "Healthy Life Pharmacy",
    email: "healthylife@example.com",
    phone: 9321098765,
    address: "Chennai, Tamil Nadu",
  },
  {
    id: 9,
    name: "Sunrise Travels",
    email: "sunrise.travels@example.com",
    phone: 9210987654,
    address: "Jaipur, Rajasthan",
  },
  {
    id: 10,
    name: "Green Valley Nursery",
    email: "greenvalley@example.com",
    phone: 9109876543,
    address: "Kolkata, West Bengal",
  },
  ];
  return (
    <section className="p-4">
      <button className="block mb-4 w-30 p-2 rounded-lg border transition-all duration-200 bg-blue-500 text-white border-blue-500 shadow-md transform scale-105">
        Add New Firm ➕
      </button>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium  tracking-wider text-gray-600">
                Sr.No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-600">
                Addres
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {mockRows.map((r) => (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {r.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {r.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {r.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {r.phone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {r.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      className=" rounded-xl border border-gray-300 px-3 py-1.5 text-sm text-gray-400 shadow-sm"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      className=" rounded-xl border border-gray-300 px-3 py-1.5 text-sm text-gray-400 shadow-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
