/* eslint-disable no-unused-vars */
import { useState } from 'react';
import wildlifecrimeimg from "../assets/wildlife-crime.jpeg";
import { supabase, createSupabaseClient } from '../supabase';
import { useUser, useAuth, SignInButton } from '@clerk/clerk-react';

const ReportCrime = () => {
  const { user } = useUser();
  const { getToken, isSignedIn } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    city: '',
    pincode: '',
    media: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isSignedIn) {
      alert('Please sign in to submit a report!');
      return;
    }

    setIsSubmitting(true);

    try {
      // Get Clerk token
      const token = await getToken({ template: 'supabase' });
      
      // Create authenticated Supabase client
      const supabaseClient = await createSupabaseClient(token);

      let mediaUrl = '';

      // Upload file if exists
      if (formData.media) {
        const fileExt = formData.media.name.split('.').pop();
        const fileName = `${user.id}-${Date.now()}.${fileExt}`;
        
        const { error: uploadError } = await supabaseClient.storage
          .from('crime-media')
          .upload(fileName, formData.media);

        if (uploadError) throw uploadError;

        const { data } = supabaseClient.storage
          .from('crime-media')
          .getPublicUrl(fileName);

        mediaUrl = data.publicUrl;
      }

      // Insert report data
      const { error: dbError } = await supabaseClient
        .from('crime_reports')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          area: formData.area,
          city: formData.city,
          pincode: formData.pincode,
          media_url: mediaUrl,
          user_id: user.id,
          user_email: user.primaryEmailAddress.emailAddress
        }]);

      if (dbError) throw dbError;

      alert('Report submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        area: '',
        city: '',
        pincode: '',
        media: null,
      });

    } catch (error) {
      console.error('Error:', error);
      alert(`Submission failed: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-5 md:ml-64 mt-12">
        <header className="mb-8 space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Report a Wildlife Crime
            </h1>
            <p className="text-gray-600">
              If you witness any crimes against wildlife, please report them
              here. Your help is crucial for protecting our wildlife.
            </p>
          </div>
          <img
            src={wildlifecrimeimg}
            alt="Wildlife crime"
            className="rounded-md w-full h-auto object-cover"
          />
        </header>

        {!isSignedIn ? (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  You need to sign in to submit a report.{" "}
                  <SignInButton mode="modal">
                    <button className="font-medium text-yellow-700 hover:text-yellow-600 underline">
                      Click here to sign in
                    </button>
                  </SignInButton>
                </p>
              </div>
            </div>
          </div>
        ) : (
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
              <label className="block text-lg font-semibold mb-2">
                Phone Number
              </label>
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
              <label className="block text-lg font-semibold mb-2">
                Pincode
              </label>
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
              <label className="block text-lg font-semibold mb-2">
                Photos/Videos
              </label>
              <input
                type="file"
                name="media"
                onChange={handleChange}
                className="w-full p-2 shadow-md border border-gray-300 rounded-md"
                accept="image/*, video/*"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`p-2 shadow-md border ${
                isSubmitting ? "bg-gray-400" : "bg-lime-500 hover:bg-lime-600"
              } text-white rounded-md font-bold w-full sm:w-auto`}
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </button>
          </form>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-1/6 bg-gray-100 p-5">
        <div className="mb-8 space-y-4">
          <h3 className="text-xl font-semibold">Your Support Matters</h3>
          <p className="text-gray-600">
            Your reports help us take action and protect wildlife.
          </p>
          {isSignedIn && (
            <p className="text-sm text-gray-500">
              Signed in as: {user.firstName}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportCrime;