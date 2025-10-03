import React from "react";
import "./EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {event.location}</p>
    </div>
  );
};

export default EventCard;
