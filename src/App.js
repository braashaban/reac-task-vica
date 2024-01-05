
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Packages from './Pages/Packages';
import Services from './Pages/Services';




function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Packages" element={<Packages />} />
      <Route path="/Services" element={<Services />} />
    
  </Routes>

    </div>
  );
}

export default App;
