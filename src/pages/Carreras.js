import { Box, Typography, Grid, Card, CardContent, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import campus from '../assets/images/campus.jpg';

const carreras = [
  { nombre: 'Arquitectura', id: 'arquitectura' }
  // ...agrega aquí las otras carreras solo con nombre e id...
];

function Carreras() {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', p: 0 }}>
      <Box sx={{ position: 'relative', height: 180, mb: 2 }}>
        <img
          src={campus}
          alt="Banner Carreras"
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
          Carreras
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Inicio &gt; Admisión &gt; Carreras
          </Typography>
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Estudia en la USM: Carreras de Pregrado
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Presentes en la Región de Valparaíso, con el Campus Casa Central Valparaíso y Sede Viña del Mar; en la Región Metropolitana con el Campus Vitacura y Campus San Joaquín y en la Región del Biobío con la Sede Concepción, el objetivo de la Universidad es formar profesionales que posean herramientas para liderar equipos y desarrollar iniciativas creativas e innovadoras, sensibles a su entorno sociocultural, complementando su excelencia y competencia en sus respectivas disciplinas. Así, cada nueva generación está llamada a engrandecer el legado heredado de don Federico Santa María Carrera.
        </Typography>
        <Box sx={{ clear: 'both', mb: 2 }} />
        <TextField
          label="Buscar carrera"
          variant="outlined"
          size="small"
          sx={{ mb: 3, width: 250 }}
        />
        <Grid container spacing={2}>
          {carreras.map((carrera, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => navigate(`/carreras/${carrera.id}`)}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {carrera.nombre}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Carreras;
