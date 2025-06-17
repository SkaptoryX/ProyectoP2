import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carreras from './pages/Carreras';
import CarreraDetalle from './pages/CarreraDetalle';
import UnderDevelopment from './pages/UnderDevelopment';
import Aranceles from './pages/Aranceles';
import AdmisionPAES from './pages/AdmisionPAES';
import BeneficiosMinisteriales from './pages/BeneficiosMinisteriales';
import BecasAdmision from './pages/BecasAdmision';
import ProgramasApoyo from './pages/ProgramasApoyo';
import AdmisionEspecial from './pages/AdmisionEspecial';
import AdmisionDirecta from './pages/AdmisionDirecta';
import logo from './assets/images/logo.png';
import './App.css';

function App() {
  return (
    <Router>
      <Box>
        <Box sx={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '60px',
          bgcolor: '#003366',
          display: 'flex',
          alignItems: 'center',
          px: 2,
          zIndex: 1000
        }}>
          <Box sx={{ 
            width: 200, // Ancho fijo para el contenedor del logo
            height: '100%',
            bgcolor: '#003366', // Mismo color de fondo que el header
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src={logo} 
              alt="Logo USM" 
              style={{ 
                height: '40px',
                marginRight: '16px'
              }} 
            />
          </Box>
          <Navbar />
        </Box>
        <Box sx={{ mt: '60px' }}> {/* Añadimos margen superior para compensar la barra fija */}
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/carreras" element={<Carreras />} />
              <Route path="/carreras/:carreraId" element={<CarreraDetalle />} />
              <Route path="/aranceles" element={<Aranceles />} />
              <Route path="/admision-paes" element={<AdmisionPAES />} />
              <Route path="/desarrollo" element={<UnderDevelopment />} />
              <Route path="/beneficios-ministeriales" element={<BeneficiosMinisteriales />} />
              <Route path="/becas-admision" element={<BecasAdmision />} />
              <Route path="/programas-apoyo" element={<ProgramasApoyo />} />
              <Route path="/admision-especial" element={<AdmisionEspecial />} />
              <Route path="/admision-directa" element={<AdmisionDirecta />} />
            </Routes>
          </div>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
