import React from "react";
import "../style/EditProfile.css";

const EditProfile = () => {
  return (
    <div className="edit-profile-container">
      <div className="header-section">
        <h2>Edit Profile</h2>
      </div>
      <div className="profile-picture">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="profile-img"
        />
        <p>Change Picture</p>
      </div>
      <form className="profile-form">
        <label>Username</label>
        <input type="text" placeholder="Your Username" />

        <label>Email ID</label>
        <input type="email" placeholder="yourmail@gmail.com" />

        <label>Phone Number</label>
        <input type="text" placeholder="+1234567890" />

        <label>Password</label>
        <input type="password" placeholder="********" />

        <button type="submit" className="update-btn">Update</button>
      </form>
    </div>
  );
};

export default EditProfile;
