import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Horses from './pages/Horses.jsx'
import PastHorses from './pages/PastHorses.jsx'
import Horses2 from './pages/Horses2.jsx'
import Contact from './pages/Contact.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/horses" element={<Horses/>} />
          <Route path="/horses_we_remember" element={<PastHorses/>} />
          <Route path="/horses_visit" element={<Horses2/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App
