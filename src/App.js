import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carreras from './pages/Carreras';
import CarreraDetalle from './pages/CarreraDetalle';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
