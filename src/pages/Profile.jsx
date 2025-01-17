import React, { useState } from "react";
import "./ProfileDropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="profile-container">
      <div className="profile-button" onClick={toggleDropdown}>
        <div className="profile-icon">P</div>
        <span className="profile-text">Profile</span>
        <div className="profile-arrow"><RiArrowDropDownLine /></div>
      </div>
      {isOpen && (
        <div className="profile-dropdown">
          <ul className="dropdown-list">
            <li className="dropdown-item">Account</li>
            <li className="dropdown-item">Settings</li>
            <li className="dropdown-item">Logout</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Profile