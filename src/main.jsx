import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comp from './components/comp';
import About from './components/about';
import Resume from './components/resume';
import Project from './components/projects';
import Contact from './components/contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Comp component={About}/>} />
          <Route path="/about" element={<Comp component={About}/>} />
          <Route path="/resume" element={<Comp component={Resume}/>} />
          <Route path="/projects" element={<Comp component={Project} />} />
          <Route path="/contact" element={<Comp component={Contact} />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>,
)
