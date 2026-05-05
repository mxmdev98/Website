import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Terms from './pages/Terms';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
     <div className="flex flex-col">
    <Navbar />
    <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;