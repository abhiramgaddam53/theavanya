'use client';

import React from 'react';

const DashNavbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img className="icon" src="./logos/DLogo.png" alt="logo" />
        </div>
        <span className="navbar-title">Dashboard</span>
      </div>

      <div className="navbar-right">
        <div className="navbar-search">
          <img className="navbar-search-icon" src="./miscellaneous/search.png" alt="alt" />
          <input
            type="text"
            placeholder="Search Rooms, Transactions"
            className="navbar-search-input"
          />
        </div>

        <button className="navbar-button">
          <span style={{ fontSize: '20px', marginRight: '5px' }}>+ </span>
          <span style={{ paddingTop: '7px' }}>Create Booking</span>
        </button>
      </div>
    </header>
  );
};

export default DashNavbar;
