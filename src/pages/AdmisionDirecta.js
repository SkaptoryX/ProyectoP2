import { Box, Typography, Link, Breadcrumbs, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid } from '@mui/material';
import admisionDirectaBanner from '../assets/images/admisionDirectaBanner.jpg';

function AdmisionDirecta() {
  const technicalCareers = [
    {
      career: "Técnico Universitario en Ciencia de Datos - Carrera Nueva",
      locations: ["Viña del Mar", "Sede Concepción"]
    },
    {
      career: "Técnico Universitario en Administración de Empresas",
      locations: ["Viña del Mar", "Vitacura", "Concepción"]
    },
    {
      career: "Técnico Universitario en Automatización y Control",
      locations: ["Concepción"]
    },
    {
      career: "Técnico Universitario en Biotecnología",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario en Construcción",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario en Control del Medio Ambiente",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario Dibujante Proyectista",
      locations: ["Concepción"]
    },
    {
      career: "Técnico Universitario en Electricidad",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario en Electrónica",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario en Energías Renovables",
      locations: ["Viña del Mar"]
    },
    {
      career: "Técnico Universitario en Alimentos",
      locations: ["Viña del Mar"]
    },
    {
      career: "Técnico Universitario en Informática",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario en Mantenimiento Aeronáutico",
      locations: ["San Joaquín"]
    },
    {
      career: "Técnico Universitario en Mantenimiento Industrial",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario en Mecánica Automotriz",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario en Mecánica Industrial",
      locations: ["Viña del Mar", "Concepción"]
    },
    {
      career: "Técnico Universitario en Minería y Metalurgia",
      locations: ["Viña del Mar"]
    },
    {
      career: "Técnico Universitario en Proyectos de Ingeniería",
      locations: ["Viña del Mar"]
    },
    {
      career: "Técnico Universitario en Química, mención Química Analítica",
      locations: ["Viña del Mar"]
    },
    {
      career: "Técnico Universitario en Química, Mención Química Industrial",
      locations: ["Concepción"]
    },
    {
      career: "Técnico Universitario en Robótica y Mecatrónica",
      locations: ["Concepción"]
    },
    {
      career: "Técnico Universitario en Telecomunicaciones y Redes",
      locations: ["Viña del Mar", "Concepción"]
    }
  ];

  const contactInfo = [
    {
      location: "Sede Viña del Mar",
      phone: "+56 32 227 7860 – +56 32 227 7862",
      email: "admision.vina@usm.cl"
    },
    {
      location: "Campus Vitacura",
      phone: "+56 2 32 028 040",
      email: "admision.santiago@usm.cl"
    },
    {
      location: "Campus San Joaquín",
      phone: "+56 2 32 037 040",
      email: "admision.santiago@usm.cl"
    },
    {
      location: "Sede Concepción",
      phone: "+56 41 24 07 528",
      email: "admision.concepcion@usm.cl"
    }
  ];

  const requirements = [
    "Ser egresado de Enseñanza Media.",
    "NEM igual o mayor a 5,0 (escala 1 a 7).",
    "Cédula de Identidad o Pasaporte Vigente.",
    "Prueba de Acceso a la Educación Superior, PAES, optativa *"
  ];

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      {/* Banner section */}
      <Box sx={{ 
        position: 'relative', 
        height: '300px',
        backgroundImage: `url(${admisionDirectaBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }
      }}>
        <Box sx={{ position: 'relative', p: 4, width: '100%' }}>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold' }}>
            Admisión Ingreso Directo
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link href="/" color="inherit" underline="hover">Inicio</Link>
          <Link href="/" color="inherit" underline="hover">Admisión</Link>
          <Typography color="text.primary">Admisión Ingreso Directo</Typography>
        </Breadcrumbs>

        <Typography paragraph sx={{ mb: 4 }}>
          La Universidad Técnica Federico Santa María, cuenta con la vía de ingreso directo para sus carreras técnicas universitarias, cuyo objetivo es fomentar el acceso y la articulación hacia la educación superior.
        </Typography>

        <Typography paragraph sx={{ mb: 4 }}>
          En esta vía de ingreso no exige puntaje mínimo en la Prueba de Acceso a la Educación Superior (PAES) para la Admisión Universitaria para acceder a las carreras técnicas universitarias que imparte la Universidad.
        </Typography>

        {/* Requirements section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Requisitos</Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            {requirements.map((req, idx) => (
              <Typography component="li" key={idx} sx={{ mb: 1 }}>
                {req}
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
            * La Admisión Ingreso Directo no exige la Prueba de Acceso a la Educación Superior rendida para sus Carreras Técnicas Universitarias, sin embargo, se recomienda rendirla para optar a diferentes beneficios ministeriales.
          </Typography>
        </Box>

        {/* Careers Table */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Carreras Ingreso Directo Carreras Técnicas Universitarias</Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                  <TableCell>Carrera</TableCell>
                  <TableCell>Campus o Sede en que se imparte</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {technicalCareers.map((career, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{career.career}</TableCell>
                    <TableCell>{career.locations.join(", ")}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Contact Information */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>Contacto Ingreso Directo Carreras Técnicas Universitarias</Typography>
          <Grid container spacing={3}>
            {contactInfo.map((contact, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" sx={{ mb: 2 }}>{contact.location}</Typography>
                  <Typography>Fono: {contact.phone}</Typography>
                  <Typography>Mail: {contact.email}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Process Dates */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Fechas del proceso
          </Typography>
          <Typography paragraph>
            Desde el 2 de septiembre en{' '}
            <Link href="https://admision.usm.cl" target="_blank" rel="noopener">
              admision.usm.cl
            </Link>
          </Typography>
        </Box>

        {/* Required Documentation */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Documentación para Postulación
          </Typography>
          <Box component="ul" sx={{ pl: 2, mb: 3 }}>
            <Typography component="li" sx={{ mb: 1 }}>
              Fotocopía Cédula de Identidad o pasaporte vigente.
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Certificado de Notas de Enseñanza Media en original (firma y timbre del establecimiento) o una copia legalizada ante notario.
            </Typography>
            <Typography component="li" sx={{ mb: 1 }}>
              Licencia de enseñanza media, o copia legalizada ante notario.
            </Typography>
          </Box>
        </Box>

        {/* Important Note */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            sx={{ 
              bgcolor: '#f5f5f5',
              p: 2,
              borderLeft: '4px solid #003366',
              fontStyle: 'italic'
            }}
          >
            Nota Importante: Las vacantes para matrícula Admisión Ingreso Directo a Carreras Técnicas Universitarias son limitadas y se establecen de acuerdo a la normativa establecida por la USM para este efecto.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}

export default AdmisionDirecta;
