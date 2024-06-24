import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Alert } from './components';

const App = () => {
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message) => {
    console.log('showAlert called with message:', message);
    setAlertMessage(message);
  };

  const closeAlert = () => {
    console.log('closeAlert called');
    setAlertMessage('');
  };

  console.log('Current alertMessage:', alertMessage);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact showAlert={showAlert} />
          <StarsCanvas />
        </div>
      </div>
      {alertMessage && <Alert message={alertMessage} onClose={closeAlert} />}
    </BrowserRouter>
  );
};

export default App;


// import React, { useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Alert } from './components';

// const App = () => {
//   const [alertMessage, setAlertMessage] = useState('');

//   const showAlert = (message) => {
//     console.log('showAlert called with message:', message);
//     setAlertMessage(message);
//   };

//   const closeAlert = () => {
//     console.log('closeAlert called');
//     setAlertMessage('');
//   };

//   console.log('Current alertMessage:', alertMessage);

//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Tech />
//         <Works />
//         <Feedbacks />
//         <div className="relative z-0">
//           <Contact showAlert={showAlert} />
//           <StarsCanvas />
//         </div>
//       </div>
//       {alertMessage && <Alert message={alertMessage} onClose={closeAlert} />}
//     </BrowserRouter>
//   );
// };

// export default App;
