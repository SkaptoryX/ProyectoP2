import { Grid, Card, CardContent, Typography, CardMedia, Box, Button } from '@mui/material';
import diurnoImg from '../assets/images/diurno.jpg';
import vespertinoImg from '../assets/images/vespertino.jpg';
import magisterImg from '../assets/images/magister.jpg';
import doctoradoImg from '../assets/images/doctorado.jpg';
import formacionImg from '../assets/images/formacion.jpg';
import { useNavigate } from 'react-router-dom';

//Página 1
function Home() {
  const navigate = useNavigate();
  const admissionCards = [
    {
      title: 'Pregrado Diurno',
      image: diurnoImg,
      items: [
        { label: 'Carreras', path: '/carreras' }, // This one goes to Carreras.js
        { label: 'Aranceles', path: '/aranceles' }, // Updated path
        { label: 'Admisión Centralizada - PAES', path: '/admision-paes' },
        { label: 'Admisión Ingreso Directo a Carreras Técnicas Universitarias', path: '/admision-directa' },
        { label: 'Admisión Especial', path: '/admision-especial' },
        { label: 'Programas de Apoyo USM', path: '/programas-apoyo' },
        { label: 'Becas de Admisión', path: '/becas-admision' },
        { label: 'Beneficios Ministeriales', path: '/beneficios-ministeriales' },
        { label: 'Calendario Oficial Proceso Admisión', path: 'https://demre.cl/calendario/calendario-proceso-2026', external: true }
      ]
    },
    {
      title: 'Pregrado Vespertino',
      image: vespertinoImg,
      items: [
        { label: 'Carreras', path: '/desarrollo' },
        { label: 'Aranceles', path: '/desarrollo' },
        { label: 'Beneficios Ministeriales', path: '/desarrollo' }
      ]
    },
    {
      title: 'Magíster',
      image: magisterImg,
      items: [
        { label: 'Dirección de Postgrado y Programas', path: '/desarrollo' },
        { label: 'Magíster Científico - Tecnológicos', path: '/desarrollo' },
        { label: 'Magíster Profesionales', path: '/desarrollo' },
        { label: 'Becas y Beneficios', path: '/desarrollo' }
      ]
    },
    {
      title: 'Doctorado',
      image: doctoradoImg,
      items: [
        { label: 'Dirección de Postgrado y Programas', path: '/desarrollo' },
        { label: 'Programas de Doctorados', path: '/desarrollo' },
        { label: 'Becas y Beneficios', path: '/desarrollo' }
      ]
    },
    {
      title: 'Formación Continua',
      image: formacionImg,
      items: [
        { label: 'Dirección General de Asistencia Técnica', path: '/desarrollo' },
        { label: 'Diplomas y Cursos', path: '/desarrollo' },
        { label: 'Evaluación y Certificación', path: '/desarrollo' }
      ]
    }
  ];

  return (
    <Box>
      <Box sx={{ 
        bgcolor: '#004a87', 
        color: 'white', 
        p: 2, 
        textAlign: 'center',
        mb: 3,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        <Typography variant="h6">
          Recorre nuestros campus o solicita una visita en tu colegio aquí!
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4, fontWeight: 'bold' }}>
          Admisión
        </Typography>

        <Grid container spacing={4}>
          {admissionCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e0e0e0',
                boxShadow: '0 10px 30px rgba(0,74,135,0.15)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,74,135,0.25)',
                  borderColor: '#b3d7ff',
                }
              }}>
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  sx={{
                    width: '100%',
                    aspectRatio: '16/9',
                    objectFit: 'cover'
                  }}
                />
                <CardContent sx={{ 
                  flexGrow: 1, 
                  p: 3,
                  backgroundColor: '#fcfcfc',
                  borderTop: '1px solid #f0f0f0'
                }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ 
                    borderBottom: '2px solid #004a87',
                    pb: 1,
                    mb: 2,
                    fontWeight: 'bold',
                    color: '#00326b'
                  }}>
                    {card.title}
                  </Typography>
                  {card.items.map((item, idx) => (
                    <Button
                      key={idx}
                      variant="outlined"
                      fullWidth
                      sx={{ 
                        mb: 1.5, 
                        textTransform: 'none',
                        justifyContent: 'flex-start',
                        pl: 2,
                        py: 1,
                        borderRadius: '8px',
                        borderColor: '#e0e0e0',
                        color: '#333',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: '#f0f7ff',
                          borderColor: '#004a87',
                          color: '#004a87',
                        }
                      }}
                      onClick={() => item.external ? window.open(item.path) : navigate(item.path)}
                      endIcon={item.external ? '↗' : null}
                    >
                      • {item.label}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
