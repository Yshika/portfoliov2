import './App.scss';
import About from './components/About';
import Experience from './components/Experience';
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
    </>
  );
}

export default App;
