import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";
import AI from "../pages/AI";
import "./index.css";

const IndexRouter = () => {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/ai">AI</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </Router>
  );
};

export default IndexRouter;



// import React, { useEffect, useState } from "react";
// import { getEvents } from "../api";
// import "./Home.css"; // create this CSS file

// const Home = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getEvents();
//       setEvents(data || []);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   if (loading) return <p>Loading events...</p>;

//   return (
//     <div className="home-container">
//       <h1>Upcoming Events</h1>
//       {events.length > 0 ? (
//         <div className="events-grid">
//           {events.map((event) => (
//             <div className="event-card" key={event._id}>
//               <h2>{event.name}</h2>
//               <p>{event.description}</p>
//               <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
//               <p><strong>Location:</strong> {event.location}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No events found</p>
//       )}
//     </div>
//   );
// };

// export default Home;
