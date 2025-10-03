// --- CEM-frontend/src/routes/routes.js ---

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all page components
import Home from '../pages/Home.jsx';        // Will contain the calendar
import Events from '../pages/Events.jsx';    // Will contain the search feature
import AI from '../pages/AI.jsx';            // Will contain the OpenAI integration

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ai" element={<AI />} />
        {/* Add more routes for login/details pages here */}
      </Routes>
    </Router>
  );
};

export default AppRouter;