import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-box" style={{
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
        <p>{message}</p>
        <button onClick={onClose} style={{
          background: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>OK</button>
      </div>
    </div>
  );
};

export default SectionWrapper(Alert, '');
