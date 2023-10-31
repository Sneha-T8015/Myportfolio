import './App.css';
import { useEffect,useState } from 'react';
import NavBar from './components/Navbar';
import Contactme from './components/contactme';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Skills from './components/skills';


import Project from './pages/Project';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  
  return (
    <div className="App bg-yellow-50">
       <NavBar show={showNavbar} className="relative" />
        <Header/>
       <Portfolio/>
       <Skills/>
  
	
      <Project/>

        <Contactme/>
    </div>
  );
}

export default App;
