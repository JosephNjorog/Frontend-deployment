import React from 'react';

function Alerts({ alerts }) {
  return (
    <div className="bg-red-100 p-4 rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-2">Alerts</h2>
      <ul className="list-disc pl-5">
        {alerts.map((alert, index) => (
          <li key={index} className="text-red-600">{alert}</li>
        ))}
      </ul>
    </div>
  );
}

export default Alerts;