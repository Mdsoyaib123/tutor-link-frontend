"use client";
import { useState } from "react";

export default function ProfileCard() {
  const [profile, setProfile] = useState({
    name: "Tafiyatul Jannat",
    email: "y@gmail.com",
    address: "Nandanpur bazer,Gopalur Upazila,Tangail",
    phone: "01766470451",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png", // cartoon girl avatar
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProfile(formData);
    setEditMode(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!editMode ? (
        <div className="bg-white shadow-lg rounded-xl p-6 w-[350px] text-center">
          <img
            src={profile.image}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <p>
            <span className="font-semibold">Name:</span> {profile.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {profile.email}
          </p>
          <p>
            <span className="font-semibold">Address:</span> {profile.address}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {profile.phone}
          </p>
          <button
            onClick={() => setEditMode(true)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-6 w-[400px] space-y-4">
          <h2 className="text-lg font-semibold">Edit Profile</h2>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Profile Image URL"
            className="w-full border px-3 py-2 rounded"
          />
          <div className="flex justify-between">
            <button
              onClick={handleSave}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
