import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out via the following methods:</p>
      <ul className="contact-info">
        <li>
          <strong>Email:</strong> <a href="mailto:support@volunteers.com">support@volunteers.com</a>
        </li>
        <li>
          <strong>Phone:</strong> +1 555-123-4567
        </li>
        <li>
          <strong>Address:</strong> 123 Volunteer Street, Community City
        </li>
      </ul>
    </div>
  );
};

export default Contact;
