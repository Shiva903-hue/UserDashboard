import { useState, useEffect } from "react";

export default function VoucherForm() {
  // --- STATE MANAGEMENT ---
  const [vendorDetails, setVendorDetails] = useState([]);
  const [formData, setFormData] = useState({
    va_id: "",
    u_email: "",
    v_date: "",
    p_name: "",
    p_rate: "",
    P_amount: "",
    P_quantity: "",
    mobile: "",
    Vendor_Name: "",
    vandro_ID: "",
    v_status: false,
  });

  const [errors, setErrors] = useState({});

  // --- DATA FETCHING ---

  // Fetches the list of vendors
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch("http://localhost:5001/get/vendorid");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVendorDetails(data);
      } catch (e) {
        console.error(
          "Could not fetch vendor data. Please ensure the backend server is running: ",
          e
        );
      }
    };

    fetchVendors();
  }, []);

  // --- FORM HANDLERS ---
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    validateField(name, value, type);
  };

  //? Handle vendor chnages
  const handleVendorChange = (e) => {
    const selectedId = e.target.value;

    const selectedVendor = vendorDetails.find(
      (vendor) => vendor.v_id.toString() === selectedId
    );

    if (selectedVendor) {
      setFormData((prevData) => ({
        ...prevData,
        vandro_ID: selectedId,
        Vendor_Name: selectedVendor.v_name,
      }));
      setErrors((prev) => ({ ...prev, vandro_ID: "", Vendor_Name: "" }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        vandro_ID: selectedId,
        Vendor_Name: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    // Re-validate all fields on submit
    Object.entries(formData).forEach(([name, value]) => {
      const inputType = typeof value === "number" ? "number" : "text";
      if (!validateField(name, value, inputType)) {
        isValid = false;
      }
    });

    if (!isValid) {
      console.error("Validation errors:", errors);
      alert("Please fix validation errors before submitting.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/voucher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("✅ Request sent successfully!");

        setFormData({
          va_id: "",
          u_email: "",
          v_date: "",
          p_name: "",
          p_rate: "",
          P_amount: "",
          P_quantity: "",
          mobile: "",
          Vendor_Name: "",
          vandro_ID: "",
          v_status: false,
        });
        setErrors({});
      } else {
        alert("Error sending request. Check the console for details.");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("A network error occurred during submission.");
    }
  };

  // --- VALIDATION LOGIC ---

  const validateField = (name, value, type) => {
    let error = "";

    if (value === null || value.toString().trim() === "") {
      error = "This field is required";

    } else if (type === "number" && !/^\d+(\.\d+)?$/.test(value)) {
      error = "Only numbers are allowed";

    } else if (name === "mobile" && !/^\d{10}$/.test(value)) {
      error = "Enter a valid 10-digit number";

    } else if (name === "Vendor_Name" && !/^[a-zA-Z\s]+$/.test(value)) {
      error = "Only alphabets and spaces are allowed";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  return (
    <div className="w-full px-4 md:px-8 bg-white p-6 rounded-2xl shadow-xl">
      <div className="border-b border-gray-100 pb-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          Send Request
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Voucher ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Voucher ID <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="va_id"
              value={formData.va_id}
              onChange={handleChange}
              placeholder="Voucher ID"
              required
              className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                errors.va_id
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-200 focus:ring-blue-500"
              }`}
            />
            {errors.va_id && (
              <p className="text-red-500 text-sm mt-1">{errors.va_id}</p>
            )}
          </div>

          {/* User Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              User Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="u_email"
              value={formData.u_email}
              onChange={handleChange}
              placeholder="User Email"
              required
              className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                errors.u_email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-200 focus:ring-blue-500"
              }`}
            />
            {errors.u_email && (
              <p className="text-red-500 text-sm mt-1">{errors.u_email}</p>
            )}
          </div>
          {/* Voucher Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Voucher Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="v_date"
              value={formData.v_date}
              onChange={handleChange}
              required
              className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                errors.v_date
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-200 focus:ring-blue-500"
              }`}
            />
            {errors.v_date && (
              <p className="text-red-500 text-sm mt-1">{errors.v_date}</p>
            )}
          </div>

          {/* Vendor ID Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor ID <span className="text-red-500">*</span>
            </label>
            <select
              name="vandro_ID"
              required
              value={formData.vandro_ID}
              onChange={handleVendorChange}
              className="mt-1 block w-full p-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
            >
              <option value="" disabled>
                -- Select an ID --
              </option>
              {vendorDetails.map((vendor) => (
                <option key={vendor.v_id} value={vendor.v_id}>
                  {vendor.v_id}
                </option>
              ))}
            </select>
            {errors.vandro_ID && (
              <p className="text-red-500 text-sm mt-1">{errors.vandro_ID}</p>
            )}
          </div>

          {/* Vendor Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Vendor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="Vendor_Name"
              value={formData.Vendor_Name} // Value is now from formData
              readOnly // This field is auto-filled
              placeholder="Vendor Name"
              required
              className={`w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed ${
                errors.Vendor_Name ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.Vendor_Name && (
              <p className="text-red-500 text-sm mt-1">{errors.Vendor_Name}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              required
              className={`w-full p-3 border rounded-lg focus:ring-2 transition-all ${
                errors.mobile
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-200 focus:ring-blue-500"
              }`}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>

          {/* Other fields... */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="p_name"
              value={formData.p_name}
              onChange={handleChange}
              placeholder="Product Name"
              required
              className={`w-full p-3 border rounded-lg ${
                errors.p_name ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.p_name && (
              <p className="text-red-500 text-sm mt-1">{errors.p_name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="P_quantity"
              value={formData.P_quantity}
              onChange={handleChange}
              placeholder="Quantity"
              required
              className={`w-full p-3 border rounded-lg ${
                errors.P_quantity ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.P_quantity && (
              <p className="text-red-500 text-sm mt-1">{errors.P_quantity}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Rate <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="p_rate"
              value={formData.p_rate}
              onChange={handleChange}
              placeholder="Rate"
              required
              className={`w-full p-3 border rounded-lg ${
                errors.p_rate ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.p_rate && (
              <p className="text-red-500 text-sm mt-1">{errors.p_rate}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Amount <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="P_amount"
              value={formData.P_amount}
              onChange={handleChange}
              placeholder="Amount"
              required
              className={`w-full p-3 border rounded-lg ${
                errors.P_amount ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.P_amount && (
              <p className="text-red-500 text-sm mt-1">{errors.P_amount}</p>
            )}
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium shadow-sm transition-colors"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
}
