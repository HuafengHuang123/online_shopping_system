import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="text-gray-800">
        <div className="bg-gray-100 py-4 px-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md p-2 border border-gray-300 rounded shadow-sm"
        />
        </div>
      <div className="bg- white-100 py-20 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Online Shopping System</h1>
        <p className="text-lg mb-6">Your favorite place to shop quality products at great prices.</p> 
      </div>
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 shadow-md rounded text-center">
            <img src="/images/DJI mini3.jpg" alt="Clothing" className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl">DJI mini 3</h3>
            <p className="text-gray-600 text-sm mt-2">Fly More Combo DJI RC</p>
            <h3 className="text-red-600 font-semibold text-xl">$959.00</h3>
            <Link to="/product/1" className="text-blue-500 hover:underline mt-2 block">View Details</Link>
          </div>

          <div className="bg-white p-6 shadow-md rounded text-center">
            <img src="/images/DJI neo.jpg" alt="Clothing" className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl">DJI Neo</h3>
            <p className="text-gray-600 text-sm mt-2">Mini Drone with 4K UHD Camera</p>
            <h3 className="text-red-600 font-semibold text-xl">$279.49</h3>
            <Link to="/product/2" className="text-blue-500 hover:underline mt-2 block">View Details</Link>
          </div>

          <div className="bg-white p-6 shadow-md rounded text-center">
            <img src="/images/iPhone16.jpg" alt="Clothing" className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Apple iPhone16</h3>
            <p className="text-gray-600 text-sm mt-2">iPhone16 512GB Ultramarine</p>
            <h3 className="text-red-600 font-semibold text-xl">$1,699.00</h3>
            <Link to="/product/3" className="text-blue-500 hover:underline mt-2 block">View Details</Link>
          </div>

          <div className="bg-white p-6 shadow-md rounded text-center">
            <img src="/images/DJi osmo.jpg" alt="Clothing" className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl">DJI Osmo Action 4</h3>
            <p className="text-gray-600 text-sm mt-2">Standard Combo - 4K/120fps Camera</p>
            <h3 className="text-red-600 font-semibold text-xl">$468.00</h3>
            <Link to="/product/4" className="text-blue-500 hover:underline mt-2 block">View Details</Link>

          </div>

          <div className="bg-white p-6 shadow-md rounded text-center">
            <img src="/images/iPhone proMax.jpg" alt="Clothing" className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Apple iPhone16 Pro Max</h3>
            <p className="text-gray-600 text-sm mt-2">iPhone16 Pro Max 512GB Desert Titanium</p>
            <h3 className="text-red-600 font-semibold text-xl">$2,247.00</h3>
            <Link to="/product/5" className="text-blue-500 hover:underline mt-2 block">View Details</Link>

          </div>
          <div className="bg-white p-6 shadow-md rounded text-center">
            <img src="/images/DJI RS3.jpg" alt="Clothing" className="mx-auto mb-4" />
            <h3 className="font-semibold text-xl">DJI RS3 Mini</h3>
            <p className="text-gray-600 text-sm mt-2">3-Axis Mirrorless Gimbal Lightweight Stabilizer for Camera</p>
            <h3 className="text-red-600 font-semibold text-xl">$349.00</h3>
            <Link to="/product/6" className="text-blue-500 hover:underline mt-2 block">View Details</Link>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white-200 text-center py-12">
        <h2 className="text-2xl font-bold mb-4">New here?</h2>
        <p className="mb-6">Create an account to start shopping and receive exclusive deals.</p>
        <Link to="/register" className="bg-white text-pink-600 px-6 py-2 rounded shadow hover:bg-gray-100">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default Home;