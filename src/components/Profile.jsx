import React from 'react';
import '../styles/Profile.css';
function Profile() {
  const user = { email: "user@example.com", name: "John Doe" }; // Dummy user data

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-bold text-xl mb-4">User Profile</h2>
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>

      {/* Add more profile details as needed */}
      {/* Example for editing profile */}
      {/* You can also add a button for editing */}
      {/* For example */}
      {/* 
       *<button>Edit Profile</button> 
       */}
    </div>
  );
}

export default Profile;