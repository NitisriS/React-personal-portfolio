import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';


function App() {
  return (
    <div className='App'>
{/* <h1 className="text-3xl font-bold underline">Portfolio</h1> */}
<Header />
<Hero />
<About />
<Education />
<Skills />
<Certifications />
<Projects />
<Resume />
<Contact />
<Footer />
    </div>
  );
}

export default App;
