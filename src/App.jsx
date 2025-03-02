import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/HomePage';
import ProjectShowcase from './Components/Projects/project';
import CertificationShowcase from './Components/Certefication/Certefication';
import LargeCard from './Components/Projects/LargeCard';

function App() {
  return (
    <Router>

      <Routes>
   
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<ProjectShowcase />} />
        <Route path="/certificates" element={<CertificationShowcase />} />
        <Route path="/project" element={<LargeCard />} />
      </Routes>

    </Router>
  )
}

export default App
