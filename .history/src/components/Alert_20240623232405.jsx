import React, { useState } from 'react';

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

const App = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    setAlertMessage(message);
  };

  const closeAlert = () => {
    setAlertMessage('');
  };

  return (
    <div>
      {alertMessage && <Alert message={alertMessage} onClose={closeAlert} />}
      <button onClick={() => showAlert('Thank you. I will get back to you as soon as possible.')}>Show Alert</button>
    </div>
  );
};

export default Alert;
