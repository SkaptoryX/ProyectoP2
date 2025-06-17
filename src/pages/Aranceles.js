import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, Select, MenuItem, InputLabel, TextField, Checkbox, ListItemText } from '@mui/material';
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
  },
  { 
    carrera: "Ingeniería Civil Química",
    codigo: "15150",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Química",
    codigo: "15350",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Telemática",
    codigo: "15161",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil Telemática",
    codigo: "15361",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil en Biotecnología",
    codigo: "15186",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Civil en Biotecnología",
    codigo: "15386",
    campus: "San Joaquín",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Comercial",
    codigo: "15171",
    campus: "Casa Central Valparaíso",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Comercial",
    codigo: "15271",
    campus: "Vitacura",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería Eléctrica",
    codigo: "–",
    campus: "Casa Central Valparaíso",
    valor: "5.660.000"
  },
  { 
    carrera: "Ingeniería en Biotecnología",
    codigo: "15485",
    campus: "Viña del Mar",
    valor: "4.880.000"
  },
  { 
    carrera: "Ingeniería en Biotecnología",
    codigo: "15585",
    campus: "Concepción",
    valor: "4.880.000"
  },
  { 
    carrera: "Ingeniería en Diseño de Productos",
    codigo: "15181",
    campus: "Casa Central Valparaíso",
    valor: "5.660.000"
  },
  { 
    carrera: "Ingeniería en Diseño de Productos",
    codigo: "15381",
    campus: "San Joaquín",
    valor: "5.660.000"
  },
  { 
    carrera: "Ingeniería en Aviación Comercial",
    codigo: "15220",
    campus: "Vitacura",
    valor: "6.710.000"
  },
  { 
    carrera: "Ingeniería en Fabricación y Diseño Industrial",
    codigo: "15441",
    campus: "Viña del Mar",
    valor: "4.880.000"
  },
  { 
    carrera: "Ingeniería en Mantenimiento Industrial",
    codigo: "15440",
    campus: "Viña del Mar",
    valor: "4.880.000"
  },
  { 
    carrera: "Ingeniería en Mantenimiento Industrial",
    codigo: "15540",
    campus: "Concepción",
    valor: "4.880.000"
  },
  { 
    carrera: "Ingeniería en Prevención de Riesgos Laborales y Ambientales",
    codigo: "15474",
    campus: "Viña del Mar",
    valor: "4.880.000"
  },
  { 
    carrera: "Ingeniería en Prevención de Riesgos Laborales y Ambientales",
    codigo: "15574",
    campus: "Concepción",
    valor: "4.880.000"
  },
  { 
    carrera: "Ingeniería en Informática",
    codigo: "15462",
    campus: "Viña del Mar",
    valor: "4.880.000"
  },
  { 
    carrera: "Ingeniería en Informática",
    codigo: "15562",
    campus: "Concepción",
    valor: "4.880.000"
  },
  { 
    carrera: "Licenciatura en Astrofísica",
    codigo: "15103",
    campus: "Casa Central Valparaíso",
    valor: "4.740.000"
  },
  { 
    carrera: "Licenciatura en Astrofísica",
    codigo: "15303",
    campus: "San Joaquín",
    valor: "4.740.000"
  },
  { 
    carrera: "Licenciatura en Ciencias, mención Química",
    codigo: "–",
    campus: "Casa Central Valparaíso",
    valor: "4.740.000"
  },
  { 
    carrera: "Licenciatura en Física",
    codigo: "15102",
    campus: "Casa Central Valparaíso",
    valor: "4.740.000"
  },
  { 
    carrera: "Licenciatura en Física",
    codigo: "15302",
    campus: "San Joaquín",
    valor: "4.740.000"
  },
  { 
    carrera: "Químico",
    codigo: "–",
    campus: "Casa Central Valparaíso",
    valor: "5.660.000"
  },
  { 
    carrera: "Técnico Universitario Dibujante Proyectista",
    codigo: "15545",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Administración de Empresas",
    codigo: "15482",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Administración de Empresas",
    codigo: "15282",
    campus: "Vitacura",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Administración de Empresas",
    codigo: "–",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Automatización y Control",
    codigo: "15537",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Biotecnología",
    codigo: "–",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Biotecnología",
    codigo: "–",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Construcción",
    codigo: "15412",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Construcción",
    codigo: "15512",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Control del Medio Ambiente",
    codigo: "15452",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Control del Medio Ambiente",
    codigo: "15552",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Electricidad",
    codigo: "15433",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Electricidad",
    codigo: "15533",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Electrónica",
    codigo: "15435",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Electrónica",
    codigo: "15535",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Energías Renovables",
    codigo: "15449",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Alimentos",
    codigo: "15453",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Informática",
    codigo: "15463",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Informática",
    codigo: "15563",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Mantenimiento Aeronáutico",
    codigo: "15222",
    campus: "San Joaquín",
    valor: "3.990.000"
  },
  { 
    carrera: "Técnico Universitario en Mantenimiento Industrial",
    codigo: "15448",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Mantenimiento Industrial",
    codigo: "–",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Mecánica Automotriz",
    codigo: "15443",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Mecánica Automotriz",
    codigo: "15543",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Mecánica Industrial",
    codigo: "15444",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Mecánica Industrial",
    codigo: "15544",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Minería y Metalurgia",
    codigo: "15413",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Proyectos de Ingeniería",
    codigo: "15446",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Química, mención Química Analítica",
    codigo: "15405",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Química, mención Química Industrial",
    codigo: "15505",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Robótica y Mecatrónica",
    codigo: "15538",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Telecomunicaciones y Redes",
    codigo: "15436",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Telecomunicaciones y Redes",
    codigo: "15536",
    campus: "Concepción",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Ciencia de Datos",
    codigo: "15464",
    campus: "Viña del Mar",
    valor: "3.070.000"
  },
  { 
    carrera: "Técnico Universitario en Ciencia de Datos",
    codigo: "15564",
    campus: "Concepción",
    valor: "3.070.000"
  }
];

function Aranceles() {
  const navigate = useNavigate();
  // Cambiar el estado para manejar múltiples selecciones
  const [selectedCampuses, setSelectedCampuses] = useState(['todos']);
  const [searchTerm, setSearchTerm] = useState('');  // Add search state

  const campuses = [
    'Casa Central Valparaíso',
    'San Joaquín',
    'Vitacura',
    'Viña del Mar',
    'Concepción'
  ];

  // Helper function to remove accents and normalize text for search
  const normalizeText = (text) => {
    return text.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Modificar el manejador del cambio de selección
  const handleCampusChange = (event) => {
    const value = event.target.value;
    
    // Si se selecciona 'todos' y no estaba seleccionado, limpiamos las otras selecciones
    if (value.includes('todos') && !selectedCampuses.includes('todos')) {
      setSelectedCampuses(['todos']);
      return;
    }

    // Si se selecciona otra opción y 'todos' estaba seleccionado, lo quitamos
    if (selectedCampuses.includes('todos')) {
      // Filtramos el nuevo valor seleccionado excluyendo 'todos'
      const newSelection = value.filter(item => item !== 'todos');
      setSelectedCampuses(newSelection);
      return;
    }

    // Para el resto de los casos, actualizamos normalmente
    setSelectedCampuses(value);
  };

  // Update the helper function with all available careers
  const hasCarreraDetails = (carreraNombre) => {
    const carreraMap = {
      'Arquitectura': 'arquitectura',
      'Construcción Civil': 'construccion-civil',
      'Ingeniería Civil': 'ingenieria-civil',
      'Ingeniería Civil Informática': 'ingenieria-civil-informatica',
      'Ingeniería Civil Química': 'ingenieria-civil-quimica',
      'Ingeniería Civil Ambiental': 'ingenieria-civil-ambiental',
      'Ingeniería Civil de Minas': 'ingenieria-civil-de-minas',
      'Ingeniería Civil Eléctrica': 'ingenieria-civil-electrica',
      'Ingeniería Civil Electrónica': 'ingenieria-civil-electronica',
      'Ingeniería Civil en Biotecnología': 'ingenieria-civil-en-biotecnologia',
      'Ingeniería Civil Física': 'ingenieria-civil-fisica',
      'Ingeniería Civil Industrial': 'ingenieria-civil-industrial',
      'Ingeniería Civil Matemática': 'ingenieria-civil-matematica',
      'Ingeniería Civil Mecánica': 'ingenieria-civil-mecanica',
      'Ingeniería Civil Metalúrgica': 'ingenieria-civil-metalurgica',
      'Ingeniería Civil Plan Común': 'ingenieria-civil-plan-comun',
      'Ingeniería Civil Telemática': 'ingenieria-civil-telematica',
      'Ingeniería Comercial': 'ingenieria-comercial',
      'Ingeniería en Aviación Comercial': 'ingenieria-en-aviacion-comercial',
      'Ingeniería en Diseño de Productos': 'ingenieria-en-diseno-de-productos',
      'Ingeniería en Fabricación y Diseño Industrial': 'ingenieria-en-fabricacion-y-diseno-industrial',
      'Ingeniería en Informática': 'ingenieria-en-informatica',
      'Ingeniería en Mantenimiento Industrial': 'ingenieria-en-mantenimiento-industrial',
      'Ingeniería en Prevención de Riesgos Laborales y Ambientales': 'ingenieria-en-prevencion-de-riesgos-laborales-y-ambientales',
      'Licenciatura en Astrofísica': 'licenciatura-en-astrofisica',
      'Licenciatura en Física': 'licenciatura-en-fisica',
      'Licenciatura en Ciencias, mención Química': 'licenciatura-en-ciencias-mencion-quimica',
      'Químico': 'quimico',
      'Técnico Universitario Dibujante Proyectista': 'tecnico-universitario-dibujante-proyectista',
      'Técnico Universitario en Administración de Empresas': 'tecnico-universitario-en-administracion-de-empresas',
      'Técnico Universitario en Alimentos': 'tecnico-universitario-en-alimentos',
      'Técnico Universitario en Automatización y Control': 'tecnico-universitario-en-automatizacion-y-control',
      'Técnico Universitario en Biotecnología': 'tecnico-universitario-en-biotecnologia',
      'Técnico Universitario en Ciencia de Datos': 'tecnico-universitario-en-ciencia-de-datos',
      'Técnico Universitario en Construcción': 'tecnico-universitario-en-construccion',
      'Técnico Universitario en Control del Medio Ambiente': 'tecnico-universitario-en-control-del-medio-ambiente',
      'Técnico Universitario en Electricidad': 'tecnico-universitario-en-electricidad',
      'Técnico Universitario en Electrónica': 'tecnico-universitario-en-electronica',
      'Técnico Universitario en Energías Renovables': 'tecnico-universitario-en-energias-renovables',
      'Técnico Universitario en Informática': 'tecnico-universitario-en-informatica',
      'Técnico Universitario en Mantenimiento Aeronáutico': 'tecnico-universitario-en-mantenimiento-aeronautico',
      'Técnico Universitario en Mantenimiento Industrial': 'tecnico-universitario-en-mantenimiento-industrial',
      'Técnico Universitario en Mecánica Automotriz': 'tecnico-universitario-en-mecanica-automotriz',
      'Técnico Universitario en Mecánica Industrial': 'tecnico-universitario-en-mecanica-industrial',
      'Técnico Universitario en Minería y Metalurgia': 'tecnico-universitario-en-mineria-y-metalurgia',
      'Técnico Universitario en Proyectos de Ingeniería': 'tecnico-universitario-en-proyectos-de-ingenieria',
      'Técnico Universitario en Química, mención Química Analítica': 'tecnico-universitario-en-quimica-mencion-quimica-analitica',
      'Técnico Universitario en Química, mención Química Industrial': 'tecnico-universitario-en-quimica-mencion-quimica-industrial',
      'Técnico Universitario en Robótica y Mecatrónica': 'tecnico-universitario-en-robotica-y-mecatronica',
      'Técnico Universitario en Telecomunicaciones y Redes': 'tecnico-universitario-en-telecomunicaciones-y-redes'
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

        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 2, 
          justifyContent: 'flex-end',
          mb: 3,
        }}>
          <TextField
            placeholder="Buscar por nombre de carrera..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ 
              flexGrow: 1,
              minWidth: { xs: '100%', md: '300px' },
            }}
          />
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel id="campus-select-label">Filtrar por Sede</InputLabel>
            <Select
              labelId="campus-select-label"
              multiple
              value={selectedCampuses}
              label="Filtrar por Sede"
              onChange={handleCampusChange}
              renderValue={(selected) => {
                if (selected.includes('todos')) return 'Todas las sedes';
                return selected.join(', ');
              }}
            >
              <MenuItem value="todos">
                <Checkbox checked={selectedCampuses.includes('todos')} />
                <ListItemText primary="Todas las sedes" />
              </MenuItem>
              {campuses.map((campus) => (
                <MenuItem key={campus} value={campus}>
                  <Checkbox checked={selectedCampuses.includes(campus)} />
                  <ListItemText primary={campus} />
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
              {arancelesData
                .filter(item => {
                  const matchesCampus = selectedCampuses.includes('todos') || selectedCampuses.includes(item.campus);
                  const matchesSearch = searchTerm === '' || 
                    normalizeText(item.carrera).includes(normalizeText(searchTerm));
                  return matchesCampus && matchesSearch;
                })
                .map((row, index) => (
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
