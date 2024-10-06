import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav className="bg-green-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Smart Irrigation</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-green-200">Home</Link></li>
          <li><Link to="/dashboard" className="text-white hover:text-green-200">Dashboard</Link></li>
          <li><Link to="/profile" className="text-white hover:text-green-200">Profile</Link></li>
          <li><Link to="/settings" className="text-white hover:text-green-200">Settings</Link></li>
          <li><Link to="/login" className="text-white hover:text-green-200">Login</Link></li>
          <li><Link to="/signup" className="text-white hover:text-green-200">Signup</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;