// --- CEM-frontend/src/components/EventCard.jsx ---

import React from "react";
import "./EventCard.css"; // Correct path

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2 className="event-title">{event.name}</h2> 
      <p className="event-description">{event.description}</p>
      <p className="event-detail">
        <span className="detail-label">Date:</span> {new Date(event.date).toLocaleDateString()}
      </p>
      <p className="event-detail">
        <span className="detail-label">Location:</span> {event.location}
      </p>
    </div>
  );
};

export default EventCard;