// --- CEM-frontend/src/App.jsx ---

import React from 'react';
import Header from './components/Header.jsx';
import AppRouter from './routes/routes.jsx'; // 👈 NEW: Import the router

// Note: Remove mockEvents, EventCard import, and EventCard.css import from App.jsx!

function App() {
  return (
    <div>
      {/* Header remains visible across ALL routes */}
      <Header /> 

      {/* The router renders the content below the header */}
      <div className="main-content">
        <AppRouter />
      </div>

      {/* ⚠️ DELETE the following lines:
      <div className="events-container">
        ... all the hardcoded events JSX and EventCard calls ...
      </div>
      */}
    </div>
  );
}

export default App;

// // --- CEM-frontend/src/App.jsx ---

// import React from 'react';
// import Header from './components/Header.jsx'; // CRITICAL: Ensure this is .jsx
// import './App.css'; // For general app layout/spacing
// import './components/EventCard.css'; // CRITICAL: Import card styles here!

// function App() {
//   return (
//     // Main App wrapper
//     <div>
//       {/* 1. Styled Header */}
//       <Header /> 

//       {/* 2. Main Content Wrapper */}
//       <div className="events-container">
//         <h1 className="section-title">Upcoming Events</h1>

//         {/* First Event Card (Applies .event-card and other classes) */}
//         <div className="event-card">
//           <h2 className="event-title">Tech Talk</h2>
//           <p className="event-description">Learn about AI and ML</p>
//           <p className="event-detail">
//             <span className="detail-label">Date:</span> 05/10/2025
//           </p>
//           <p className="event-detail">
//             <span className="detail-label">Location:</span> Auditorium
//           </p>
//         </div>

//         {/* Second Event Card */}
//         <div className="event-card">
//           <h2 className="event-title">Coding Contest</h2>
//           <p className="event-description">Solve DSA challenges</p>
//           <p className="event-detail">
//             <span className="detail-label">Date:</span> 10/10/2025
//           </p>
//           <p className="event-detail">
//             <span className="detail-label">Location:</span> Lab 3
//           </p>
//         </div>
        
//         {/* ... other event cards ... */}
//       </div>
//     </div>
//   );
// }

// export default App;