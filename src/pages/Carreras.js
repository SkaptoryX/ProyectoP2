import { Box, Typography, Grid, Card, CardContent, TextField, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import campus from '../assets/images/campus.jpg';
import Breadcrumb from '../components/Breadcrumb';

//Página 2
const carreras = [
  { nombre: 'Arquitectura', id: 'arquitectura', imagen: 'https://usm.cl/wp-content/uploads/2021/01/casa-central-arquitectura.w2000.jpg' },
  { nombre: 'Construcción Civil', id: 'construccion-civil', imagen: 'https://usm.cl/wp-content/uploads/2021/01/casa-central-construccion-civil.w2000.jpg' },
  { nombre: 'Ingeniería Civil', id: 'ingenieria-civil', imagen: 'https://usm.cl/wp-content/uploads/2021/01/casa-central-ingenieria-civil.w2000.jpg' },
  { nombre: 'Ingeniería Civil Ambiental', id: 'ingenieria-civil-ambiental', imagen: 'https://usm.cl/wp-content/uploads/2021/04/casa-central-ingenieria-civil-ambiental.w2000.jpg' },
  { nombre: 'Ingeniería Civil de Minas', id: 'ingenieria-civil-de-minas', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-CIvil-de-Minas.jpg' },
  { nombre: 'Ingeniería Civil Eléctrica', id: 'ingenieria-civil-electrica', imagen: 'https://usm.cl/wp-content/uploads/2022/09/Ing.-Civil-Ele%CC%81ctrica.jpg' },
  { nombre: 'Ingeniería Civil Electrónica', id: 'ingenieria-civil-electronica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/casa-central-ingenieria-civil-electronica.w2000.jpg' },
  { nombre: 'Ingeniería Civil en Biotecnología', id: 'ingenieria-civil-en-biotecnologia', imagen: 'https://usm.cl/wp-content/uploads/2024/10/ingenieria-en-biotecnologia.jpg' },
  { nombre: 'Ingeniería Civil Física', id: 'ingenieria-civil-fisica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Civil-Fi%CC%81sica.jpg' },
  { nombre: 'Ingeniería Civil Industrial', id: 'ingenieria-civil-industrial', imagen: 'https://usm.cl/wp-content/uploads/2024/06/ing-civil-industrial.jpg' },
  { nombre: 'Ingeniería Civil Informática', id: 'ingenieria-civil-informatica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/san-joaquin-ingenieria-civil-informatica.w2000.jpg' },
  { nombre: 'Ingeniería Civil Matemática', id: 'ingenieria-civil-matematica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/san-joaquin-ingenieria-civil-matematica.w2000.jpg' },
  { nombre: 'Ingeniería Civil Mecánica', id: 'ingenieria-civil-mecanica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/san-joaquin-ingenieria-civil-mecanica.w2000.jpg' },
  { nombre: 'Ingeniería Civil Metalúrgica', id: 'ingenieria-civil-metalurgica', imagen: 'https://usm.cl/wp-content/uploads/2022/09/Ing.-Civil-Metalu%CC%81rgica.jpg' },
  { nombre: 'Ingeniería Civil Plan Común', id: 'ingenieria-civil-plan-comun', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Civil-Plan-Comu%CC%81n.jpg' },
  { nombre: 'Ingeniería Civil Química', id: 'ingenieria-civil-quimica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Civil-Qui%CC%81mica.jpg' },
  { nombre: 'Ingeniería Civil Telemática', id: 'ingenieria-civil-telematica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Civil-Telema%CC%81tica.jpg' },
  { nombre: 'Ingeniería Comercial', id: 'ingenieria-comercial', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-Comercial.jpg' },
  { nombre: 'Ingeniería en Aviación Comercial', id: 'ingenieria-en-aviacion-comercial', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-en-Aviacio%CC%81n-Comercial.jpg' },
  { nombre: 'Ingeniería en Biotecnología', id: 'ingenieria-en-biotecnologia', imagen: 'https://usm.cl/wp-content/uploads/2022/08/Ing.-biotecnologi%CC%81a-FINAL.jpg' },
  { nombre: 'Ingeniería en Diseño de Productos', id: 'ingenieria-en-diseno-de-productos', imagen: 'https://usm.cl/wp-content/uploads/2023/09/Ing.-en-Disen%CC%83o-de-Productos.jpg' },
  { nombre: 'Ingeniería en Fabricación y Diseño Industrial', id: 'ingenieria-en-fabricacion-y-diseno-industrial', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-en-Fabricacio%CC%81n-y-Disen%CC%83o-Industrial.jpg' },
  { nombre: 'Ingeniería en Informática', id: 'ingenieria-en-informatica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/concepcion-ingenieria-informatica-pc-01.png' },
  { nombre: 'Ingeniería en Mantenimiento Industrial', id: 'ingenieria-en-mantenimiento-industrial', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-ingenieria-en-mantenimiento-industrial.w2000.jpg' },
  { nombre: 'Ingeniería en Prevención de Riesgos Laborales y Ambientales', id: 'ingenieria-en-prevencion-de-riesgos-laborales-y-ambientales', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Ing.-en-prevencio%CC%81n-de-riesgos-ambientales-y-labores.jpg' },
  { nombre: 'Licenciatura en Astrofísica', id: 'licenciatura-en-astrofisica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Licenciatura-en-Astrofi%CC%81sica.jpg' },
  { nombre: 'Licenciatura en Ciencias, mención Química', id: 'licenciatura-en-ciencias-mencion-quimica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/casa-central-licenciatura-en-ciencias-mencion-quimica.w2000.jpg' },
  { nombre: 'Licenciatura en Física', id: 'licenciatura-en-fisica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Licenciatura-en-Fi%CC%81sica.jpg' },
  { nombre: 'Químico', id: 'quimico', imagen: 'https://usm.cl/wp-content/uploads/2021/04/casa-central-quimico.w2000.jpg' },
  { nombre: 'Técnico Universitario Dibujante Proyectista', id: 'tecnico-universitario-dibujante-proyectista', imagen: 'https://usm.cl/wp-content/uploads/2022/10/TU-Dibujante-Proyectista.jpg' },
  { nombre: 'Técnico Universitario en Administración de Empresas', id: 'tecnico-universitario-en-administracion-de-empresas', imagen: 'https://usm.cl/wp-content/uploads/2023/09/TU-en-administracio%CC%81n-de-empresas.jpg' },
  { nombre: 'Técnico Universitario en Alimentos', id: 'tecnico-universitario-en-alimentos', imagen: 'https://usm.cl/wp-content/uploads/2022/10/TU-en-alimentos.jpg' },
  { nombre: 'Técnico Universitario en Automatización y Control', id: 'tecnico-universitario-en-automatizacion-y-control', imagen: 'https://usm.cl/wp-content/uploads/2022/09/TU-en-automatizacio%CC%81n-y-control.jpg' },
  { nombre: 'Técnico Universitario en Biotecnología', id: 'tecnico-universitario-en-biotecnologia', imagen: 'https://usm.cl/wp-content/uploads/2022/03/tu-biotecnologia-slide.jpg' },
  { nombre: 'Técnico Universitario en Ciencia de Datos', id: 'tecnico-universitario-en-ciencia-de-datos', imagen: 'https://usm.cl/wp-content/uploads/2024/10/tu-en-ciencia-de-datos.png' },
  { nombre: 'Técnico Universitario en Construcción', id: 'tecnico-universitario-en-construccion', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-construccion.w2000.jpg' },
  { nombre: 'Técnico Universitario en Control del Medio Ambiente', id: 'tecnico-universitario-en-control-del-medio-ambiente', imagen: 'https://usm.cl/wp-content/uploads/2024/06/tu-control-medio-ambiente.jpg' },
  { nombre: 'Técnico Universitario en Electricidad', id: 'tecnico-universitario-en-electricidad', imagen: 'https://usm.cl/wp-content/uploads/2022/10/TU-en-electricidad.jpg' },
  { nombre: 'Técnico Universitario en Electrónica', id: 'tecnico-universitario-en-electronica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-electronica.w2000.jpg' },
  { nombre: 'Técnico Universitario en Energías Renovables', id: 'tecnico-universitario-en-energias-renovables', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-energias-renovables.w2000.jpg' },
  { nombre: 'Técnico Universitario en Informática', id: 'tecnico-universitario-en-informatica', imagen: 'https://usm.cl/wp-content/uploads/2022/10/TU-en-informa%CC%81tica.jpg' },
  { nombre: 'Técnico Universitario en Mantenimiento Aeronáutico', id: 'tecnico-universitario-en-mantenimiento-aeronautico', imagen: 'https://usm.cl/wp-content/uploads/2022/10/Te%CC%81cnico-en-Mantenimiento-Aerona%CC%81utico.jpg' },
  { nombre: 'Técnico Universitario en Mantenimiento Industrial', id: 'tecnico-universitario-en-mantenimiento-industrial', imagen: 'https://usm.cl/wp-content/uploads/2023/09/TU-en-mantenimiento-industrial.jpg' },
  { nombre: 'Técnico Universitario en Mecánica Automotriz', id: 'tecnico-universitario-en-mecanica-automotriz', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-mecanica-automotriz.w2000.jpg' },
  { nombre: 'Técnico Universitario en Mecánica Industrial', id: 'tecnico-universitario-en-mecanica-industrial', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-mecanica-industrial.w2000.jpg' },
  { nombre: 'Técnico Universitario en Minería y Metalurgia', id: 'tecnico-universitario-en-mineria-y-metalurgia', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-mineria-y-metalurgia.w2000.jpg' },
  { nombre: 'Técnico Universitario en Proyectos de Ingeniería', id: 'tecnico-universitario-en-proyectos-de-ingenieria', imagen: 'https://usm.cl/wp-content/uploads/2022/11/TU-en-proyectos-de-ingenieri%CC%81a.jpg' },
  { nombre: 'Técnico Universitario en Química, mención Química Analítica', id: 'tecnico-universitario-en-quimica-mencion-quimica-analitica', imagen: 'https://usm.cl/wp-content/uploads/2021/04/vina-del-mar-tecnico-universitario-en-quimica-mencion-quimica-analitica.w2000.jpg' },
  { nombre: 'Técnico Universitario en Química, mención Química Industrial', id: 'tecnico-universitario-en-quimica-mencion-quimica-industrial', imagen: 'https://usm.cl/wp-content/uploads/2021/04/concepcion-tecnico-universitario-en-quimica-mencion-quimica-industrial.w2000.jpg' },
  { nombre: 'Técnico Universitario en Robótica y Mecatrónica', id: 'tecnico-universitario-en-robotica-y-mecatronica', imagen: 'https://usm.cl/wp-content/uploads/2022/11/TU-robotica-mecatronica.jpg' },
  { nombre: 'Técnico Universitario en Telecomunicaciones y Redes', id: 'tecnico-universitario-en-telecomunicaciones-y-redes', imagen: 'https://usm.cl/wp-content/uploads/2022/09/TU-telecomunicaciones-y-redes-e1733250148370.jpg' }
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
        <Breadcrumb 
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Admisión', path: '/' },
            { label: 'Carreras' }
          ]}
        />
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
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <Card 
                sx={{ 
                  height: '100%', 
                  cursor: 'pointer',
                  display: 'flex', // Added for flex layout
                  flexDirection: 'column', // Added for flex layout
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    transform: 'translateY(-4px)',
                    transition: 'all 0.3s ease-in-out'
                  }
                }} 
                onClick={() => navigate(`/carreras/${carrera.id}`)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={carrera.imagen}
                  alt={carrera.nombre}
                />
                <CardContent sx={{ flexGrow: 1 }}> {/* Added flexGrow to make content take remaining space */}
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
