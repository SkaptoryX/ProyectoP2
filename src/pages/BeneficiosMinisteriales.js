import { Box, Typography, Link, Breadcrumbs } from '@mui/material';
import beneficiosBanner from '../assets/images/beneficiosBanner.jpg';

function BeneficiosMinisteriales() {
  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      {/* Banner con imagen de fondo */}
      <Box sx={{ 
        position: 'relative', 
        height: '300px',
        backgroundImage: `url(${beneficiosBanner})`,
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
            Beneficios Ministeriales
          </Typography>
        </Box>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link href="/" color="inherit" underline="hover">Inicio</Link>
          <Link href="/" color="inherit" underline="hover">Admisión</Link>
          <Typography color="text.primary">Beneficios Ministeriales</Typography>
        </Breadcrumbs>

        <Typography variant="h4" sx={{ mb: 4, color: '#002C6C' }}>
          Becas y créditos del Ministerio de Educación
        </Typography>

        <Typography paragraph sx={{ color: '#666', mb: 4 }}>
          Los estudiantes de la Universidad Técnica Federico Santa María, institución Acreditada por 6 años, pueden optar a las diferentes alternativas de financiamiento que otorga el Ministerio de Educación (Mineduc), las que se detallan a continuación:
        </Typography>

        {/* Secciones de beneficios */}
        <Box sx={{ '& > *:not(:last-child)': { mb: 5 } }}>
          <Box>
            <Typography variant="h5" sx={{ color: '#002C6C', fontWeight: 'bold', mb: 2 }}>
              Gratuidad
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              Este beneficio es dirigido a las familias correspondientes al 60% de menores ingresos de la población, cuyos miembros estudien en instituciones adscritas a este beneficio como la Universidad Técnica Federico Santa María. El beneficio implica que los estudiantes que se adjudican la Gratuidad no deberán pagar el arancel ni la matrícula durante la duración formal de la carrera. Para más información sobre el proceso de postulación visita{' '}
              <Link href="http://www.gratuidad.cl" target="_blank" rel="noopener">
                www.gratuidad.cl
              </Link>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: '#002C6C', fontWeight: 'bold', mb: 2 }}>
              Becas Ministeriales
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              Una beca es un apoyo económico que entrega el Ministerio de Educación para que puedas financiar parte del costo de tus estudios, cubriendo el total o parte del arancel anual de tu carrera, y en algunos casos, la matrícula.
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              Para conocer más sobre cada una de ellas, visita portal.beneficiosestudiantiles.cl/becas/becas-de-arancel.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: '#002C6C', fontWeight: 'bold', mb: 2 }}>
              Créditos de Educación Superior
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              También puedes obtener apoyo para financiar tu arancel a través de un crédito para la Educación Superior. Estos consisten en préstamos que te ayudan a cubrir parte del costo de tus estudios y que se financian con recursos estatales, los que se entregan a través de una Institución de Educación Superior o con el respaldo del Estado (en el caso del CAE).
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
              a) Fondo Solidario de Crédito Universitario
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              Cubre parte o el total de tu arancel de referencia en universidades tradicionales, en base a tu situación socioeconómica.
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              Para acceder a este crédito debes pertenecer al 80% de la población de menores ingresos del país y obtener un puntaje en la Prueba de Transición Admisión Universitaria (PDT) promedio (pruebas Lenguaje y Matemática) igual o superior a 475 puntos, el año de la postulación o el anterior.
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              Para más información ingresa a https://portal.beneficiosestudiantiles.cl/becas-y-creditos/fondo-solidario-de-credito-universitario-fscu.
            </Typography>

            <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 3, mb: 1 }}>
              b) Crédito con Garantía Estatal (CAE)
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              Es un beneficio del Estado que se otorga a estudiantes que acrediten mérito académico y que necesitan financiamiento para iniciar o continuar una carrera en instituciones de educación superior acreditadas que formen parte del Sistema de Crédito con Garantía Estatal.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h5" sx={{ color: '#002C6C', fontWeight: 'bold', mb: 2 }}>
              Becas Complementarias
            </Typography>
            <Typography paragraph sx={{ color: '#666' }}>
              Los estudiantes que acceden a los beneficios de arancel del Ministerio de Educación (Mineduc) o de la Comisión Ingresa, y se encuentren dentro de los primeros 6 deciles de ingreso per cápita, pueden acceder a la beca de alimentación de educación superior de la Junta Nacional de Auxilio Escolar y Becas (Junaeb), conocida también como BAES.
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
          Sitios de interés sobre los beneficios mencionados:
        </Typography>
        <Box component="ul" sx={{ pl: 2, color: '#666' }}>
          {/* Enlaces con el componente Link */}
          <Typography component="li">
            Postulación a beneficios del Estado:{' '}
            <Link href="http://www.fuas.cl" target="_blank" rel="noopener">
              www.fuas.cl
            </Link>
          </Typography>
          <Typography component="li">
            Información de beneficios Mineduc:{' '}
            <Link href="https://portal.beneficiosestudiantiles.cl" target="_blank" rel="noopener">
              https://portal.beneficiosestudiantiles.cl
            </Link>
          </Typography>
          <Typography component="li">
            Requisitos institucionales para acceder al CAE en la USM:{' '}
            <Link href="https://www.rree.usm.cl/beneficios/credito-con-garantia-estatal/" target="_blank" rel="noopener">
              https://www.rree.usm.cl/beneficios/credito-con-garantia-estatal/
            </Link>
          </Typography>
          <Typography component="li">
            Beneficios JUNAEB:{' '}
            <Link href="http://www.junaeb.cl" target="_blank" rel="noopener">
              www.junaeb.cl
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BeneficiosMinisteriales;
