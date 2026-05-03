import React from 'react';
import './PageLoader.css';

const PageLoader = () => {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-logo">
          <div className="loader-icon">S</div>
          <div className="loader-brand">
            <span>Skyline</span>
            <small>Finserv</small>
          </div>
        </div>
        <div className="loader-bar">
          <div className="loader-fill" />
        </div>
        <p className="loader-text">Loading your financial partner...</p>
      </div>
    </div>
  );
};

export default PageLoader;