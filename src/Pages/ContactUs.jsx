import React from "react";
import "../style/Contactus.css"; 
const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us.</p>
      
      <div className="contact-details">
        <p><strong>Address:</strong> Pokhara, Nepal</p>
        <p><strong>Phone:</strong> +977 9856000757</p>
        <p><strong>Email:</strong> swadeshistores@gmail.com</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
