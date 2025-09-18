import React ,{useState}from "react";

export default function BankMasterForm() {

    const [formData , setFormData] = useState({
      	b_name:"",
        b_accno:"",
        b_ifsc:"",
        city:"",
        u_email:"",
        // b_id:""
    })

    const handleChange = (e)=>{
      setFormData({...formData , [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e)=>{
       e.preventDefault();

       const res = await fetch("http://localhost:5001/api/bankmaster",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData),
       })

       if(res.ok){
        alert(" ✅ Bank details inserted successfully")
        setFormData({
        b_name:"",
        b_accno:"",
        b_ifsc:"",
        city:"",
        u_email:"",
        // b_id:""
        })
       }else{
        alert("❌ error sending req")
       }

    }
  return (
   <div className="w-full px-4 md:px-12 bg-white p-6 rounded-2xl shadow-xl">
  {/* Header */}
  <div className="border-b border-gray-100 pb-4 mb-6">
    <h2 className="text-2xl font-bold text-gray-800">Add Bank Details</h2>
  </div>

  <form onSubmit={handleSubmit} className="space-y-6">
    {/* User Information */}
    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">User Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">User Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="u_email"
            value={formData.u_email}
            placeholder="Enter User Email"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>
      </div>
    </div>

    {/* Bank Information */}
    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Bank Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="b_name"
            value={formData.b_name}
            placeholder="Enter Bank Name"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bank Account Number</label>
          <input
            onChange={handleChange}
            type="text"
            name="b_accno"
            value={formData.b_accno}
            placeholder="Enter Bank Account Number"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">IFSC Code</label>
          <input
            onChange={handleChange}
            type="text"
            name="b_ifsc"
            value={formData.b_ifsc}
            placeholder="Enter IFSC Code"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Bank Branch</label>
          <input
            onChange={handleChange}
            type="text"
            name="city"
            value={formData.city}
            placeholder="Enter Bank Branch"
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            required
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
        Add Bank Details
      </button>
    </div>
  </form>
</div>
  );
}