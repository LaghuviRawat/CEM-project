import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { getEvents } from "../api";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data || []);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (!events.length) return <p>No events found</p>;

  return (
    <div className="events-grid">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
