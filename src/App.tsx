import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Summary from './components/Summary';

function App() {
  return (
    <>
      <Nav />
      <Summary />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
