import React, { useState } from "react";

function Sidebar() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const menuItems = [
    { icon: "fa-house", label: "Home" },
    { icon: "fa-download", label: "Download" },
    { icon: "fa-history", label: "History" },
    { icon: "fa-user", label: "Profile" },
    { icon: "fa-cog", label: "Settings" },
    { icon: "fa-question-circle", label: "Help" },
    { icon: "fa-sign-out-alt", label: "Logout" },
    { icon: "fa-envelope", label: "Messages" },
    { icon: "fa-calendar-alt", label: "Calendar" },
    { icon: "fa-book", label: "Library" },
    { icon: "fa-chart-line", label: "Analytics" },
    { icon: "fa-shopping-cart", label: "Cart" },
    { icon: "fa-play-circle", label: "Videos" },
    { icon: "fa-camera", label: "Camera" },
    { icon: "fa-music", label: "Music" },
    { icon: "fa-gamepad", label: "Games" },
    { icon: "fa-globe", label: "Global" },
    { icon: "fa-heart", label: "Favorites" },
    { icon: "fa-search", label: "Search" },
    { icon: "fa-wrench", label: "Tools" },
  ];

  return (
    <div className={`container ${isMenuVisible ? "sidebar-active" : ""}`}>
      <aside className={`sidebar ${isMenuVisible ? "active" : ""}`}>
        <div className="icon-container hover" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
        {isMenuVisible &&
          menuItems.map((item, index) => (
            <div className="icon-container" key={index}>
              <i className={`fa-solid ${item.icon}`}></i>
              <p>{item.label}</p>
            </div>
          ))}
      </aside>
    
    </div>
  );
}

export default Sidebar;
