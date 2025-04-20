'use client';

import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Importing the eye icons
import { FaGithub, FaGoogle } from 'react-icons/fa'; // Importing social media icons

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);  // State to toggle password visibility

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);  // Toggle password visibility
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // TODO: Send to backend for authentication
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-300 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-extrabold text-blue-800 text-center">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}  // Toggle input type based on state
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border text-black rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <div 
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? <AiFillEyeInvisible size={24} color="#6B7280" /> : <AiFillEye size={24} color="#6B7280" />}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Login
          </button>

          {/* Forgot Password Link */}
          <p className="text-center text-sm text-gray-600">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </p>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-600 hover:underline">
              Register here
            </a>
          </p>
        </form>
        <div className="text-center mt-6 space-y-4">
          <p className="text-sm text-gray-600">Or login with</p>

          {/* GitHub Login */}
          <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-md bg-gray-100 text-black hover:bg-gray-200 transition duration-300">
            <FaGithub size={20} className="mr-3" />
            GitHub
          </button>

          {/* Google Login */}
          <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-md bg-gray-100 text-black hover:bg-gray-200 transition duration-300">
            <FaGoogle size={20} className="mr-3" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
