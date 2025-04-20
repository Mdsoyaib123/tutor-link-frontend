'use client';
import Link from 'next/link';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';  // Importing the eye icons

export default function StudentRegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  const [showPassword, setShowPassword] = useState(false);  // State to toggle password visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering Student:', formData);
    // TODO: Send to backend
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);  // Toggle password visibility
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-300 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-extrabold text-blue-800 text-center">Register as Student 🎓</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}  // Toggle input type based on state
              name="password"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${showPassword ? '' : ''}`}
              required
            />
            <div 
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <AiFillEyeInvisible size={24} color="#6B7280" /> : <AiFillEye size={24} color="#6B7280" />}
            </div>
          </div>

          <div className="relative">
            <input
              type="text"
              name="role"
              value={formData.role}
              disabled
              className="w-full px-4 py-3 border rounded-md bg-gray-100 text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Register Now
          </button>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
         </form>
      </div>
    </div>
  );
}
