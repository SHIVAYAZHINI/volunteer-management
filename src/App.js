import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Volunteers from "./pages/Volunteers";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import './App.css';


const App = () => {
  // Initialize volunteers as an empty array
  const [volunteers, setVolunteers] = useState([]); 

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Volunteer Management</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/volunteers">Volunteers</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* Pass volunteers and setVolunteers */}
        <Route path="/" element={<Home volunteers={volunteers} setVolunteers={setVolunteers} />} />
        <Route path="/volunteers" element={<Volunteers volunteers={volunteers} setVolunteers={setVolunteers} />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
