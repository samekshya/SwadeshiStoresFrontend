import React from "react";
import "../style/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <header className="header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Swadesi Stores is dedicated to bringing authentic Nepali handicrafts and
            products to the global market. We focus on preserving Nepal's rich cultural
            heritage by promoting handmade goods crafted by local artisans.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower artisans by providing them with a platform to showcase
            their skills and reach a broader audience. We believe in sustainable business
            practices that uplift communities and ensure fair wages for craftsmen.
          </p>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Authentic and high-quality Nepali products</li>
            <li>Support for local artisans and fair trade</li>
            <li>Commitment to sustainability and eco-friendly materials</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
