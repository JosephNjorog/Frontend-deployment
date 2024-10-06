import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import { fetchSensorData } from '../api/sensors';

function DashboardPage() {

const [sensorData, setSensorData] = useState(null);

useEffect(() => {

const getSensorData = async () => {

const data = await fetchSensorData();
setSensorData(data);
};

getSensorData();

}, []);

return (
<div className='container mx-auto mt=10'>
<h1 style={{ fontSize:"3rem", marginBottom:"20px"}} >Dashboard Page</h1>

{sensorData ? (
<Dashboard sensorData={sensorData} />
) : (
<p style={{ fontSize:"1.25rem"}} >Loading sensor data...</p>

)}
</div>

);
}

export default DashboardPage;
