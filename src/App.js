import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carreras from './pages/Carreras';
import CarreraDetalle from './pages/CarreraDetalle';
import UnderDevelopment from './pages/UnderDevelopment';
import Aranceles from './pages/Aranceles';
import AdmisionPAES from './pages/AdmisionPAES';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carreras" element={<Carreras />} />
          <Route path="/carreras/:carreraId" element={<CarreraDetalle />} />
          <Route path="/aranceles" element={<Aranceles />} />
          <Route path="/admision-paes" element={<AdmisionPAES />} />
          <Route path="/desarrollo" element={<UnderDevelopment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
