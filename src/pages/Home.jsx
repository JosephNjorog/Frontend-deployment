import React from 'react';
import NavigationBar from '../components/NavigationBar';
import './Home.css'; // Import the CSS file for Home component

function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <section className="home-section">
        <div className="intro-container">
          <h1 className="home-title">Welcome to the Smart Irrigation System!</h1>
          <p className="home-subtitle">Your solution for efficient farming and crop management.</p>
        </div>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="features-title">Features:</h2>
          <ul className="features-list">
            {[
              "🌱 Real-time monitoring of soil moisture levels.",
              "💧 Automated irrigation based on weather conditions.",
              "📊 Data visualization for better decision-making.",
              "🔔 Alerts for critical updates and maintenance needs.",
              "👩‍🌾 User-friendly interface for easy navigation.",
              "📈 Detailed analytics for crop health tracking.",
              "🌍 Sustainable practices for eco-friendly farming.",
              "📱 Mobile compatibility for managing your farm on the go.",
              "🛠️ Customizable settings to fit your farming needs.",
              "🔒 Secure access and user management features.",
              "🔄 Integration with IoT devices for seamless operation.",
              "🚀 Continuous updates and improvements based on user feedback.",
              "🎓 Educational resources and support for farmers.",
              "🌟 Community engagement and collaboration opportunities."
            ].map((feature, index) => (
              <li key={index} className="feature-item">{feature}</li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}

export default Home;