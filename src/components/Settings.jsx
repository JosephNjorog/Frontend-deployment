import React, { useState } from 'react';

function Settings() {
  
const [notificationsEnabled, setNotificationsEnabled] = useState(true);
const [darkMode, setDarkMode] = useState(false);

const handleToggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
const handleToggleDarkMode = () => setDarkMode(!darkMode);

return (
<div className="bg-white p-6 rounded-lg shadow-md">
<h2 className="font-bold text-xl mb-4">Settings</h2>

{/* Notification Preferences */}
<div className="mb-4">
<label className="flex items-center">
<input type="checkbox" checked={notificationsEnabled} onChange={handleToggleNotifications} />
<span className="ml-2">Enable Notifications</span>
</label>

{/* Dark Mode Toggle */}
<label className="flex items-center mt-2">
<input type="checkbox" checked={darkMode} onChange={handleToggleDarkMode} />
<span className="ml-2">Enable Dark Mode</span>
</label>

{/* Additional settings can be added here */}
</div>

{/* Save Changes Button */}
<button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save Changes</button>

</div>

);
}

export default Settings;