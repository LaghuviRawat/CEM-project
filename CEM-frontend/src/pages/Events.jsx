// --- CEM-frontend/src/pages/Events.jsx ---

import React, { useState } from 'react';
import EventCard from '../components/EventCard.jsx'; // Use your existing card component

// Mock data (replace this with a fetch call later)
const ALL_EVENTS = [
    { id: 1, name: "Tech Talk", description: "Learn about AI and ML", date: "2025-10-05", location: "Auditorium" },
    { id: 2, name: "Coding Contest", description: "Solve DSA challenges", date: "2025-10-10", location: "Lab 3" },
    { id: 3, name: "Database Workshop", description: "Advanced SQL techniques", date: "2025-11-01", location: "Online" },
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = ALL_EVENTS.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="events-container" style={{ padding: '40px', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Upcoming Events</h1>
      
      {/* Search Input Feature */}
      <input
        type="text"
        placeholder="Search events by name or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '12px 15px',
          marginBottom: '30px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          fontSize: '1em'
        }}
      />

      {/* Render Filtered Events */}
      {filteredEvents.length > 0 ? (
        filteredEvents.map(event => <EventCard key={event.id} event={event} />)
      ) : (
        <p style={{ textAlign: 'center', color: '#dc3545' }}>No events found matching "{searchTerm}".</p>
      )}
    </div>
  );
};

export default Events;