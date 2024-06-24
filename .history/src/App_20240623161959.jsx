import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover"
              src="/src/assets/bluesquare.mov"
              autoPlay
              loop
              muted
            />
          </div>
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
    </BrowserRouter>
  )
}

export default App
