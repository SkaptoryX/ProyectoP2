import { Box, Typography, Paper, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import infMalla from '../assets/images/infmalla.png';
import arquiMalla from '../assets/images/arquimalla.png';
import quimiMalla from '../assets/images/quimimalla.png';
import Breadcrumb from '../components/Breadcrumb';

//Página 3
const carrerasData = {
  arquitectura: {
    nombre: 'Arquitectura',
    formacion: `La carrera de Arquitectura de la USM permite dominar y aplicar conocimientos científico-tecnológicos avanzados para el diseño, evaluación y desarrollo del hábitat construido, promoviendo con ello el mejoramiento de la calidad de vida de las personas. Instalará, como tema central de su discurso, la preocupación por la intervención sustentable sobre el medio ambiente, el emprendimiento y la investigación disciplinar. Construirá un activo diálogo interdisciplinar vinculando de modo indisoluble, la creatividad e innovación arquitectónica con las ciencias de la ingeniería y la gestión de los recursos.`,
    info: [
      { label: 'Título Profesional', value: 'Arquitecto o Arquitecta' },
      { label: 'Grado Académico', value: 'Licenciado en Arquitectura o Licenciada en Arquitectura' },
      { label: 'Duración de los estudios', value: '5,5 años (11 semestres académicos)' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Casa Central Valparaíso y Campus San Joaquín' },
      { label: 'Puntaje mínimo de corte', value: '632 pts' },
      { label: 'Puntaje promedio', value: '654 pts' }
    ],
    departamento: {
      url: 'https://www.arquitectura.usm.cl/',
      label: 'Conoce el sitio del Departamento de Arquitectura'
    },
    puntajes: {
      url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/',
      label: 'Ver puntajes oficiales en DEMRE'
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
      { label: 'Lugar', value: 'Campus Casa Central Valparaíso y Campus San Joaquín' },
      { label: 'Puntaje mínimo de corte', value: '675 pts' },
      { label: 'Puntaje promedio', value: '698 pts' }
    ],
    departamento: {
      url: 'https://www.inf.utfsm.cl/',
      label: 'Conoce el sitio del Departamento de Informática'
    },
    puntajes: {
      url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/',
      label: 'Ver puntajes oficiales en DEMRE'
    },
    malla: infMalla
  },
  quimica: {
    nombre: 'Ingeniería Civil Química',
    formacion: 'El/La Ingeniero/a Civil Químico/a de la Universidad Técnica Federico Santa María es un/a profesional con sólida formación científico-tecnológica en el área de la ingeniería química. Está capacitado/a para crear y desarrollar soluciones innovadoras y tradicionales, asumismo, procesos de liderazgo en la gestión de empresas. A su vez, podrá diseñar, evaluar y ejecutar proyectos utilizando tecnologías y herramientas de análisis y evaluación de riesgos de proceso, optimizando el uso de los recursos disponibles para asegurar el cumplimiento de la legislación vigente.',
    info: [
      { label: 'Título Profesional', value: 'Ingeniero Civil Químico o Ingeniera Civil Química' },
      { label: 'Grado Académico', value: 'Licenciatura en Ciencias de la Ingeniería' },
      { label: 'Duración de los estudios', value: '5 años (10 semestres académicos)' },
      { label: 'Régimen', value: 'Diurno' },
      { label: 'Lugar', value: 'Campus Casa Central Valparaíso y Campus San Joaquín' },
      { label: 'Puntaje mínimo de corte', value: '645 pts' },
      { label: 'Puntaje promedio', value: '668 pts' }
    ],
    departamento: {
      url: 'https://www.diq.usm.cl/',
      label: 'Conoce el sitio del Departamento de Ingeniería Química y Ambiental'
    },
    puntajes: {
      url: 'https://acceso.mineduc.cl/proceso-admision/puntajes-de-corte/',
      label: 'Ver puntajes oficiales en DEMRE'
    },
    malla: quimiMalla
  }
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
        <Breadcrumb 
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Admisión', path: '/' },
            { label: 'Carreras', path: '/carreras' },
            { label: data.nombre }
          ]}
        />
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
              <Box sx={{ mt: 2 }}>
                <a
                  href={data.puntajes.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00629b', textDecoration: 'underline', fontWeight: 700 }}
                >
                  {data.puntajes.label}
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
