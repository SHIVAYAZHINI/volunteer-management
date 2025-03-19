import React from "react";

const Volunteers = ({ volunteers = [], setVolunteers }) => {
  const approveVolunteer = (id) => {
    setVolunteers(
      volunteers.map((vol) =>
        vol.id === id ? { ...vol, status: "Approved" } : vol
      )
    );
  };

  const removeVolunteer = (id) => {
    setVolunteers(
      volunteers.map((vol) =>
        vol.id === id ? { ...vol, status: "Declined" } : vol
      )
    );
  };

  return (
    <div className="volunteers-page">
      <h1>Volunteer List</h1>
      {volunteers.length === 0 ? (
        <p>Volunteering is not just an act of giving—it's an act of living.
        When you step forward to help others, you create ripples of kindness that spread far beyond what you can see.
        It's in volunteering that we find purpose, connection, and a way to truly make a difference.
        The world needs your unique spark—become the reason someone smiles today. Together, we can transform lives, communities, and futures.
        The most valuable gift you can give is your time, your heart, and your hope."</p>
      ) : (
        <div className="volunteer-list">
          {volunteers.map((vol) => (
            <div key={vol.id} className="volunteer-card">
              <p><strong>Name:</strong> {vol.name}</p>
              <p><strong>Event:</strong> {vol.event}</p>
              <p><strong>Date:</strong> {vol.date}</p>
              <p><strong>Status:</strong> {vol.status}</p>
              {vol.status === "Pending" && (
                <div>
                  <button onClick={() => approveVolunteer(vol.id)} className="approve-btn">Approve</button>
                  <button onClick={() => removeVolunteer(vol.id)} className="remove-btn">Remove</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Volunteers;
