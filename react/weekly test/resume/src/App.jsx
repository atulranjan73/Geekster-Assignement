import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';  // Ensure correct capitalization
import Blogs from './components/Blogs';
import Resume from './components/Resume';
import Navbar from './components/Navbar';      // Assuming your Navbar is a separate component
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
