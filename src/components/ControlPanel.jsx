import React from 'react';

function ControlPanel() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="font-bold text-xl mb-4">Control Panel</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Start Irrigation</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4">Stop Irrigation</button>
      <h3 className="font-semibold mt-6">Irrigation Schedule:</h3>
      <ul className="list-disc pl-5 mt-2">
        <li>Monday: 8:00 AM - 30 minutes</li>
        <li>Wednesday: 8:00 AM - 30 minutes</li>
        <li>Friday: 8:00 AM - 30 minutes</li>
      </ul>
    </div>
  );
}

export default ControlPanel;