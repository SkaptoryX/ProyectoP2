import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';
import infMalla from '../assets/images/infmalla.png';
import arquiMalla from '../assets/images/arquimalla.png';

const carrerasData = {
  arquitectura: {
    nombre: 'Arquitectura',
    formacion: `La carrera de Arquitectura de la USM permite dominar y aplicar conocimientos científico-tecnológicos avanzados para el diseño, evaluación y desarrollo del hábitat construido, promoviendo con ello el mejoramiento de la calidad de vida de las personas. Instalará, como tema central de su discurso, la preocupación por la intervención sustentable sobre el medio ambiente, el emprendimiento y la investigación disciplinar. Construirá un activo diálogo interdisciplinar vinculando de modo indisoluble, la creatividad e innovación arquitectónica con las ciencias de la ingeniería y la gestión de los recursos.`,
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
    malla: arquiMalla
  },
  informatica: {
    nombre: 'Ingeniería Civil Informática',
    formacion: 'El/La Ingeniero/a Civil Informático/a de la Universidad Técnica Federico Santa María de forma para apoyar estratégicamente la mejora continua de las organizaciones, integrando eficientemente a las personas y tecnologías de información. Domina y aplica las tecnologías basadas en técnicas cuantitativas en contextos de incertidumbre, diseñando soluciones de software sostenibles y escalables, reflejando su compromiso con la calidad y la innovación. Es capaz de realizar el análisis de sistemas y arquitecturas computacionales a nivel de rendimiento, conectividad y seguridad, y define soluciones computacionales robustas, aplicando algoritmos y fundamentos teóricos para resolver problemas en ingeniería.',
    info: [
      { label: 'Título Profesional', value: 'Ingeniero Civil Informático o Ingeniera Civil Informática' },
      { label: 'Grado Académico', value: 'Licenciatura en Ciencias de la Ingeniería' },
      { label: 'Duración de los estudios', value: '5 años (10 semestres académicos)' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Casa Central Valparaíso y Campus San Joaquín' }
    ],
    departamento: {
      url: 'https://www.inf.utfsm.cl/',
      label: 'Conoce el sitio del Departamento de Informática'
    },
    malla: infMalla
  }
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

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Perfil de Egreso
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              {data.formacion}
            </Typography>
            {data.malla && (
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                  Plan de Estudios*
                </Typography>
                <img 
                  src={data.malla} 
                  alt="Malla Curricular"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
              {data.info.map((item, idx) => (
                <Box key={idx} sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.value}
                  </Typography>
                </Box>
              ))}
              <Box sx={{ mt: 3 }}>
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
      </Box>
    </Box>
  );
}

export default CarreraDetalle;
