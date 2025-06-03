import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';

const carrerasData = {
  arquitectura: {
    nombre: 'Arquitectura',
    formacion: `La carrera de Arquitectura de la USM permite dominar y aplicar conocimientos científico-tecnológicos avanzados para el diseño, evaluación y desarrollo del hábitat construido, promoviendo con ello el mejoramiento de la calidad de vida de las personas. Instalará, como tema central de su discurso, la preocupación por la intervención sustentable sobre el medio ambiente, el emprendimiento y la investigación disciplinar. Construirá un activo diálogo interdisciplinar vinculando de modo indisoluble, la creatividad e innovación arquitectónica con las ciencias de la ingeniería y la gestión de los recursos.`,
    video: 'https://www.youtube.com/embed/9QwM6yQd4nA',
    info: [
      { label: 'Título Profesional', value: 'Arquitecto o Arquitecta' },
      { label: 'Grado Académico', value: 'Licenciado en Arquitectura o Licenciada en Arquitectura' },
      { label: 'Duración de los estudios', value: '5,5 años (11 semestres académicos)' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Casa Central Valparaíso y Campus San Joaquín' }
    ],
    departamento: {
      url: 'https://www.arquitectura.usm.cl/',
      label: 'Conoce el sitio del Departamento de Arquitectura'
    },
    plan: [
      {
        semestre: '1° Semestre',
        ramos: [
          'Taller de Introducción a la Arquitectura',
          'Matemática I',
          'Introducción a la Física',
          'Educación Física I'
        ]
      },
      {
        semestre: '2° Semestre',
        ramos: [
          'Taller de Introducción a la Arquitectura',
          'Matemática II',
          'Física Básica para Arquitectos',
          'Educación Física II'
        ]
      }
    ]
  },
  // ...agrega aquí los datos de las otras carreras...
};

function CarreraDetalle() {
  const { carreraId } = useParams();
  const data = carrerasData[carreraId];

  if (!data) {
    return <Typography variant="h5" sx={{ m: 4 }}>Carrera no encontrada</Typography>;
  }

  return (
    <Box>
      <Box sx={{ height: 60, mb: 2, bgcolor: '#003366', display: 'flex', alignItems: 'center', pl: 4 }}>
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            fontWeight: 700
          }}
        >
          {data.nombre}
        </Typography>
      </Box>
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Inicio &gt; Admisión &gt; Carreras &gt; {data.nombre}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Formación
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              {data.formacion}
            </Typography>
            <Box sx={{ mb: 2 }}>
              <iframe
                width="100%"
                height="315"
                src={data.video}
                title={`Video ${data.nombre}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 8 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
              {data.info.map((item, idx) => (
                <Box key={idx} sx={{ mb: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.value}
                  </Typography>
                </Box>
              ))}
              <Box sx={{ mt: 2 }}>
                <a
                  href={data.departamento.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00629b', textDecoration: 'underline', fontWeight: 700 }}
                >
                  {data.departamento.label}
                </a>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Plan de Estudios*
        </Typography>
        <Grid container spacing={2}>
          {data.plan.map((sem, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Card sx={{ bgcolor: '#003366', color: 'white' }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
                    {sem.semestre}
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    {sem.ramos.map((ramo, i) => (
                      <li key={i} style={{ marginBottom: 4 }}>{ramo}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default CarreraDetalle;
