import React from 'react';
import SensorDataVisualization from './SensorDataVisualization';
import Alerts from './Alerts';
import ControlPanel from './ControlPanel';
import '../styles/Dashboard.css';
function Dashboard({ sensorData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-2">
        <SensorDataVisualization data={sensorData} />
      </div>
      <div className="col-span-1">
        <Alerts alerts={sensorData.alerts} />
        <ControlPanel />
      </div>
    </div>
  );
}

export default Dashboard;