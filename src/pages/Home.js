import React, { useState } from "react";

const Home = ({ volunteers, setVolunteers }) => {
  const [newVolunteer, setNewVolunteer] = useState({
    name: "",
    event: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const addVolunteer = () => {
    if (!newVolunteer.name || !newVolunteer.event || !newVolunteer.date) {
      alert("Please fill in all fields!");
      return;
    }

    // Use setVolunteers to update the volunteers list
    setVolunteers([
      ...volunteers, // Spread the existing volunteers
      { ...newVolunteer, id: Date.now(), status: "Pending" },
    ]);

    // Reset the form
    setNewVolunteer({ name: "", event: "", date: "", startTime: "", endTime: "" });
  };

  return (
    <div>
      <h1>Welcome to the Volunteer Management System</h1>
      <div className="add-volunteer">
        <h2>Add New Volunteer</h2>
        <input
          type="text"
          placeholder="Name"
          value={newVolunteer.name}
          onChange={(e) => setNewVolunteer({ ...newVolunteer, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Event"
          value={newVolunteer.event}
          onChange={(e) => setNewVolunteer({ ...newVolunteer, event: e.target.value })}
        />
        <input
          type="date"
          value={newVolunteer.date}
          onChange={(e) => setNewVolunteer({ ...newVolunteer, date: e.target.value })}
        />
        <input
          type="time"
          value={newVolunteer.startTime}
          onChange={(e) => setNewVolunteer({ ...newVolunteer, startTime: e.target.value })}
        />
        <input
          type="time"
          value={newVolunteer.endTime}
          onChange={(e) => setNewVolunteer({ ...newVolunteer, endTime: e.target.value })}
        />
        <button onClick={addVolunteer}>Add Volunteer</button>
      </div>
    </div>
  );
};

export default Home;
