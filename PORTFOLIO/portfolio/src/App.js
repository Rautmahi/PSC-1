
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Techstacks from './components/Techstacks';
import Myprojects from './components/Myprojects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <About />
      <Techstacks/>
      <Myprojects />
      <Contact/> 
      <Footer/>     
    </div>
  );
}

export default App;
