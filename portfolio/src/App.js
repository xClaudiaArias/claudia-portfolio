import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import styled from 'styled-components';

const Section = styled.section`
    height: 100vh; /* Adjust based on your design */
    padding: 20px;
`;

const AppContainer = styled.div`
  /* width: 90%; */
  margin-inline: auto;
  position: relative;
  overflow: hidden;
`

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Section id="home">
          <Home />
      </Section>
      <Section id="about">
          <About />
      </Section>
      <Section id="projects">
          <Projects />
      </Section>
      <Section id="contact">
          <Contact />
      </Section>
    </AppContainer>
  );
}

export default App;
