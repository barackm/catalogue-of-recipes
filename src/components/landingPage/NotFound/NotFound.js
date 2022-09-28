import React from 'react';
import logo from '../../../assets/img/logo_transparent.png';

const NotFound = () => {
  const headerStyle = {
    padding: '2rem 0 0',
    lineHeight: '1.5em',
  };

  return (
    <div className="d-flex flex-center flex-column" style={headerStyle}>
      <h1 className="">404 Not Found</h1>
      <div className="div-logo">
        <img src={logo} alt={logo} style={headerStyle} />
      </div>
    </div>
  );
};

export default NotFound;
