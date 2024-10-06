// Dummy sensor data API functions

export const fetchSensorData = async () => {
    // Simulate fetching sensor data with dummy values
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          soilMoisture: 35,
          temperature: 22,
          humidity: 60,
          waterUsage: 1200,
          alerts: [
            "Low soil moisture detected.",
            "Temperature is above optimal range."
          ]
        });
      }, 1000);
    });
  };