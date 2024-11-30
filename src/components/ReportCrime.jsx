import { useState } from 'react';
import Sidebar from './Sidebar';
import wildlifecrimeimg from "../assets/wildlife-crime.jpeg";

const ReportCrime = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    city: '',
    pincode: '',
    media: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('crimeReport', JSON.stringify(formData));
    alert('Crime report has been saved locally!');
    setFormData({
      name: '',
      phone: '',
      email: '',
      area: '',
      city: '',
      pincode: '',
      media: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5 md:ml-64 mt-12">
        <header className="mb-8 space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Report a Wildlife Crime</h1>
            <p className="text-gray-600">
              If you witness any crimes against wildlife, please report them here. Your help is crucial for protecting our wildlife.
            </p>
          </div>
          <img src={wildlifecrimeimg} alt="" className="rounded-md w-full h-auto object-cover" />
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Area</label>
            <input
              type="text"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Pincode</label>
            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              className="w-full p-2 shadow-md border border-gray-300 rounded-md focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Photos/Videos</label>
            <input
              type="file"
              name="media"
              onChange={(e) => handleChange({ target: { name: 'media', value: e.target.files[0] } })}
              className="w-full p-2 shadow-md border border-gray-300 rounded-md"
              accept="image/*, video/*"
            />
          </div>

          <button
            type="submit"
            className="p-2 shadow-md border bg-lime-500 text-white hover:bg-lime-600 rounded-md font-bold w-full sm:w-auto"
          >
            Submit Report
          </button>
        </form>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-1/6 bg-gray-100 p-5">
        <div className="mb-8 space-y-4">
          <h3 className="text-xl font-semibold">Your Support Matters</h3>
          <p className="text-gray-600">Your reports help us take action and protect wildlife.</p>
        </div>
      </div>
    </div>
  );
};

export default ReportCrime;
