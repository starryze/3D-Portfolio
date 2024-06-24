import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Alert } from './components';

const App = () => {
    const [alertMessage, setAlertMessage] = useState('');
  
    const showAlert = (message) => {
      setAlertMessage(message);
    };
  
    const closeAlert = () => {
      setAlertMessage('');
    };

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
          <About></About>
          <Experience></Experience>
          <Tech></Tech>
          <Works></Works>
          <Feedbacks></Feedbacks>
          <div className="relative z-0">
            <Contact showAlert={showAlert}></Contact>
            <StarsCanvas></StarsCanvas>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App