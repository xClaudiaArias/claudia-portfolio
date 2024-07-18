import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import styled from 'styled-components';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 30px;
`;

const GradientCircle = styled.div`
  position: absolute;
  width: 50vw;
  height: 100vh;
  border-radius: 50%;
  top: 50%;
  right: 15%;
  transform: translate(50%, -50%);
  background: linear-gradient(to bottom, rgba(255,0,230,0.2), rgba(0,163,255,0.2));
  filter: blur(20px);
  z-index: -1; 
`;

function App() {
  return (
    <AppContainer>
      <GradientCircle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
