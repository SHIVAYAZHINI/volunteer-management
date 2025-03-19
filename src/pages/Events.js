import React from "react";

const Events = () => {
  const events = [
    { id: 1, name: "Community Cleanup", date: "2024-03-10", description: "Help us clean our neighborhood and make it beautiful again!" },
    { id: 2, name: "Tree Planting", date: "2024-04-15", description: "Join us to plant trees and contribute to a greener future." },
    { id: 3, name: "Charity Run", date: "2024-05-20", description: "Participate in a charity run to support underprivileged children." },
  ];

  return (
    <div className="events-page">
      <h1>Upcoming Events</h1>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.name}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
