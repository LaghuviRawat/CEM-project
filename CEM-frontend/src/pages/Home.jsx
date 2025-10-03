// --- CEM-frontend/src/pages/Home.jsx ---

import React, { useState } from 'react';
import Calendar from 'react-calendar'; // 👈 Import the Calendar component
// Import the component's required CSS (must be relative to node_modules/react-calendar)
import 'react-calendar/dist/Calendar.css'; 
// Import your custom styles for the Home page
import '../pages/Home.css'; 

const Home = () => {
  // State to manage the calendar's selected date (optional, but good practice)
  const [date, setDate] = useState(new Date()); 

  return (
    <div className="home-page-container">
      <h1 className="home-title">Event Calendar Overview</h1>
      <p className="home-subtitle">
        Welcome! Use the calendar below to quickly jump to events on a specific date.
      </p>

      {/* 👈 IMPLEMENTATION OF THE CALENDAR */}
      <div className="calendar-wrapper">
        <Calendar 
          onChange={setDate} // Update the state when a new date is clicked
          value={date}      // Set the currently selected date
          calendarType="gregory" // Ensure standard Gregorian calendar
        />
      </div>

      <div className="event-list-summary">
        <h2>Events on Selected Date: {date.toDateString()}</h2>
        <p>
            {/* 💡 NOTE: You would add logic here to filter and display events 
               based on the 'date' state variable. */}
            [Placeholder for dynamic event listing]
        </p>
      </div>

    </div>
  );
};

export default Home;