import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Edu from './components/edu/Edu';
import Home from './components/home/Home';
import Navebar from './components/navbar/Navebar';
import Skill from './components/Skill/Skill';

function App() {
  return (
    
    <>
    <Navebar />
    <Home />
    <About />
    <Skill />
    <Edu />
    <Contact />
    </>
    
  );
}

export default App;
