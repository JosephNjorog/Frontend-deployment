import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function SensorDataVisualization({ data }) {
  
const chartData = [
{ name: 'Soil Moisture', value: data.soilMoisture },
{ name: 'Temperature', value: data.temperature },
{ name: 'Humidity', value: data.humidity },
{ name: 'Water Usage', value: data.waterUsage },
];

return (
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="font-bold text-xl mb-4">Sensor Data Visualization</h2>

<ResponsiveContainer width="100%" height={300}>
<BarChart data={chartData}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Bar dataKey="value" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>

{/* Displaying current values below the chart */}
<div className='mt-4'>
<p>Current Soil Moisture: {data.soilMoisture}%</p>
<p>Current Temperature: {data.temperature}°C</p>
<p>Current Humidity: {data.humidity}%</p>
<p>Total Water Usage Today: {data.waterUsage} liters</p>
</div>

</div>

);
}

export default SensorDataVisualization;