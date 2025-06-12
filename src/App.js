import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AeroWindowBar, Header, About, Experience, Education, Contact, Footer, XPStartButton, XPStartMenu } from './components';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [startOpen, setStartOpen] = useState(false);
  const handleStartClick = () => setStartOpen((open) => !open);
  const handleCloseMenu = () => setStartOpen(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AeroWindowBar />
      <Header />
      <main style={{ flex: 1, padding: '2rem 1rem 1rem 1rem', maxWidth: 700, margin: '0 auto' }}>
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <XPStartButton onClick={handleStartClick} />
      {startOpen && <XPStartMenu onClose={handleCloseMenu} />}
    </div>
  );
}

export default App;
