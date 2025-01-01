import './App.scss';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Summary from './components/Summary';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.cursor-dot');
      const cursorOutline = document.querySelector('.cursor-dot-outline');

      cursor?.setAttribute(
        'style',
        `top: ${e.pageY - 8}px; left: ${e.pageX - 8}px`
      );

      cursorOutline?.animate(
        {
          top: `${e.pageY - 20}px`,
          left: `${e.pageX - 20}px`,
        },
        {
          duration: 300,
          fill: 'forwards',
          easing: 'ease',
        }
      );
      cursorOutline?.setAttribute(
        'style',
        `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px`
      );
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='cursor-dot-outline'></div>
      <div className='cursor-dot'></div>

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
