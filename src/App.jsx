import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DashboardPage from './pages/DashboardPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Settings from './components/Settings';
import IrrigationPage from './pages/IrrigationPage'; // Importing IrrigationPage
import CropHealthDashboard from './components/CropHealthDashboard'; // Importing CropHealthDashboard
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="container mx-auto p-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/irrigation" element={<IrrigationPage />} /> {/* Route for Irrigation Page */}
          <Route path="/crop-health" element={<CropHealthDashboard data={dummyCropHealthData} />} /> {/* Route for Crop Health Dashboard */}
        </Routes>
      </div>
    </Router>
  );
}

// Dummy data for Crop Health Dashboard
const dummyCropHealthData = {
  overallHealth: 85,
  pestRisk: 2,
  nutrientLevels: 75,
  growthData: [
    { date: '2024-09-01', height: 20 },
    { date: '2024-09-08', height: 25 },
    { date: '2024-09-15', height: 30 },
    { date: '2024-09-22', height: 35 },
    { date: '2024-09-29', height: 40 },
    { date: '2024-10-06', height: 45 },
  ],
  alerts: [
    "Pest infestation detected in section A.",
    "Nutrient levels low in field B.",
    "Irrigation system malfunction reported.",
    "Weather forecast indicates heavy rainfall.",
    "Soil moisture levels below optimal range."
  ]
};

export default App;