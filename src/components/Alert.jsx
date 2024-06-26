import React from 'react';

const Alert = ({ message, onClose }) => {
  const handleClickOutside = (event) => {
    if (event.target.className === 'alert-box') {
      onClose();
    }
  };

  return (
    <div className="alert-box" onClick={handleClickOutside} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="alert-content" style={{
        background: 'white',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      }}>
        <p style={{ fontSize: '24px', color: 'black' }}>{message}</p>
        <button onClick={onClose} style={{
          background: '#d88c06',
          color: 'white',
          border: 'none',
          marginTop: '15px',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>Close</button>
      </div>
    </div>
  );
};

export default Alert;
