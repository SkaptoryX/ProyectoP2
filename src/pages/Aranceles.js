import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import arancelesBanner from '../assets/images/arancelesBanner.jpg';
import Breadcrumb from '../components/Breadcrumb';

const arancelesData = [
  { 
    carrera: "Arquitectura",
    codigo: "15180",
    campus: "Casa Central Valparaíso",
    valor: "6.150.000"
  },
  { 
    carrera: "Arquitectura",
    codigo: "15380",
    campus: "San Joaquín",
    valor: "6.150.000"
  },
  { 
    carrera: "Construcción Civil",
    codigo: "15110",
    campus: "Casa Central Valparaíso",
    valor: "5.660.000"
  },
  { 
    carrera: "Ingeniería Civil",
    codigo: "15111",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil",
    codigo: "15311",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Ambiental",
    codigo: "15151",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil de Minas",
    codigo: "15312",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Eléctrica",
    codigo: "15130",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Eléctrica",
    codigo: "15330",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Electrónica",
    codigo: "15131",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Física",
    codigo: "15184",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Física",
    codigo: "15384",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Industrial",
    codigo: "15170",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Industrial",
    codigo: "15270",
    campus: "Vitacura",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Informática",
    codigo: "15160",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Informática",
    codigo: "15360",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Matemática",
    codigo: "15101",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Matemática",
    codigo: "15301",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Mecánica",
    codigo: "15140",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Mecánica",
    codigo: "15340",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Metalúrgica",
    codigo: "15141",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Plan Común",
    codigo: "15100",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Plan Común",
    codigo: "15300",
    campus: "San Joaquín",
    valor: "6.710.000"
  }
];

function Aranceles() {
  const navigate = useNavigate();
  const [selectedCampus, setSelectedCampus] = useState('todos');

  const campuses = ['Casa Central Valparaíso', 'San Joaquín', 'Vitacura'];
  
  const filteredData = selectedCampus === 'todos'
    ? arancelesData
    : arancelesData.filter(item => item.campus === selectedCampus);

  // Add a helper function to check if a career has details
  const hasCarreraDetails = (carreraNombre) => {
    const carreraMap = {
      'Arquitectura': 'arquitectura',
      'Ingeniería Civil Informática': 'informatica',
      'Ingeniería Civil Química': 'quimica'
    };
    return carreraMap[carreraNombre];
  };

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', p: 0 }}>
      <Box sx={{ position: 'relative', height: 180, mb: 2 }}>
        <img
          src={arancelesBanner}
          alt="Banner Aranceles"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
        />
        <Typography
          variant="h4"
          sx={{
            position: 'absolute',
            left: 32,
            bottom: 24,
            color: 'white',
            fontWeight: 700
          }}
        >
          Aranceles
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Breadcrumb 
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Admisión', path: '/' },
            { label: 'Aranceles' }
          ]}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="campus-select-label">Filtrar por Sede</InputLabel>
            <Select
              labelId="campus-select-label"
              value={selectedCampus}
              label="Filtrar por Sede"
              onChange={(e) => setSelectedCampus(e.target.value)}
            >
              <MenuItem value="todos">Todas las sedes</MenuItem>
              {campuses.map((campus) => (
                <MenuItem key={campus} value={campus}>
                  {campus}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            color: '#003366',
            mb: 3 
          }}>
            Pagos de derecho de matrícula y arancel anual para estudiantes de primer año
          </Typography>

          <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="body1" paragraph>
              La Universidad Técnica Federico Santa María de acuerdo a los decretos 552/2024, 553/2024 y 554/2024 ha fijado los valores de arancel y derecho básico de matrícula para estudiantes nuevos para las Carreras de Pregrado y Programas Científicos admisión 2025.
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 700,
                color: '#003366',
                mb: 1 
              }}>
                Modalidades de pago:
              </Typography>
              <Typography variant="body1" paragraph>
                Estos valores están considerados para el año 2025 y su pago puede diferirse hasta en diez (10) cuotas mensuales, a contar del mes de marzo de 2025.
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" sx={{ 
                fontWeight: 700,
                color: '#003366',
                mb: 1 
              }}>
                Derecho básico de matrícula:
              </Typography>
              <Typography variant="body1" paragraph>
                El valor del derecho básico de matrícula para alumnos nuevos admisión 2025 es de $260.000 anual, monto que se puede cancelar en dos cuotas semestrales de $130.000.
              </Typography>
            </Box>

            <Typography variant="subtitle1" sx={{ 
              fontWeight: 700,
              color: '#003366',
              mb: 2 
            }}>
              Valores de arancel:
            </Typography>
            <Typography variant="body1">
              Los valores de arancel se pueden revisar en la siguiente tabla:
            </Typography>
          </Paper>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell>Carrera</TableCell>
                <TableCell>Código</TableCell>
                <TableCell>Campus o Sede en que se imparte</TableCell>
                <TableCell align="right">Valores Aranceles Anuales Admisión 2024 (CLP)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                  <TableCell component="th" scope="row">
                    {hasCarreraDetails(row.carrera) ? (
                      <Typography
                        component="span"
                        sx={{
                          cursor: 'pointer',
                          color: '#00629b',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                        onClick={() => navigate(`/carreras/${hasCarreraDetails(row.carrera)}`)}
                      >
                        {row.carrera}
                      </Typography>
                    ) : (
                      row.carrera
                    )}
                  </TableCell>
                  <TableCell>{row.codigo}</TableCell>
                  <TableCell>{row.campus}</TableCell>
                  <TableCell align="right">{row.valor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Aranceles;
