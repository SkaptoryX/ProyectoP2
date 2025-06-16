import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import paesBanner from '../assets/images/paesBanner.jpg';
import Breadcrumb from '../components/Breadcrumb';

const ponderacionesData = [
  {
    tipo: 'CON M2',
    nem: '15%',
    ranking: '20%',
    m1: '35%',
    m2: '30%',
    competenciaLectora: 'NO EXIGE',
    ciencias: '0',
    historiaSociales: '0'
  },
  {
    tipo: 'SIN M2',
    nem: '15%',
    ranking: '25%',
    m1: '40%',
    m2: 'NO EXIGE',
    competenciaLectora: '10%',
    ciencias: '10%',
    historiaSociales: '0'
  }
];

function AdmisionPAES() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', p: 0 }}>
      <Box sx={{ position: 'relative', height: 180, mb: 2 }}>
        <img
          src={paesBanner}
          alt="Banner PAES"
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
          Admisión Centralizada - PAES
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2 }}>
        <Breadcrumb 
          items={[
            { label: 'Inicio', path: '/' },
            { label: 'Admisión', path: '/' },
            { label: 'Admisión Centralizada - PAES' }
          ]}
        />

        <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>
          Admisión vía Prueba de Acceso a la Educación Superior - PAES
        </Typography>

        <Typography variant="body1" paragraph>
          El ingreso tradicional a primer año de las carreras ofrecidas por la Universidad Técnica Federico Santa María se realiza anualmente a través del Proceso Nacional de Admisión a las Universidades adscritas al Consejo de Rectores.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 700 }}>
          Ingreso Regular Centralizado
        </Typography>

        <TableContainer component={Paper} sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: '#f5f5f5', width: '80px' }}>NEM</TableCell>
                <TableCell sx={{ bgcolor: '#f5f5f5' }}>
                  Ranking<br />Notas
                </TableCell>
                <TableCell sx={{ bgcolor: '#f5f5f5' }}>
                  Competencia<br />Matemática 1 (M1)
                </TableCell>
                <TableCell sx={{ bgcolor: '#f5f5f5' }}>
                  Competencia<br />Matemática 2 (M2)
                </TableCell>
                <TableCell sx={{ bgcolor: '#f5f5f5' }}>
                  Competencia<br />Lectora
                </TableCell>
                <TableCell sx={{ bgcolor: '#f5f5f5' }}>Ciencias</TableCell>
                <TableCell sx={{ bgcolor: '#f5f5f5' }}>
                  Historia y<br />Ciencias<br />Sociales
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ bgcolor: '#f8f9fa', fontWeight: 'bold' }} colSpan={7}>
                  CON M2
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>15%</TableCell>
                <TableCell>20%</TableCell>
                <TableCell>35%</TableCell>
                <TableCell>30%</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ bgcolor: '#f8f9fa', fontWeight: 'bold' }} colSpan={7}>
                  SIN M2
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>15%</TableCell>
                <TableCell>25%</TableCell>
                <TableCell>40%</TableCell>
                <TableCell>NO EXIGE</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>10%</TableCell>
                <TableCell>0</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
          Requerimientos generales de postulación
        </Typography>

        <Box component={Paper} sx={{ p: 3, mb: 4 }}>
          <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 700 }}>
            a) Máximo de Postulaciones y orden de preferencia
          </Typography>
          <Typography variant="body2" paragraph>
            La USM no existen restricciones al máximo de postulaciones ni exclusión por preferencias.
          </Typography>
          <Typography variant="body2" paragraph color="error">
            IMPORTANTE: Recuerda que debes ordenar las carreras según tu orden de preferencias y se pueden seleccionar hasta 20 preferencias como máximo.
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 1, mt: 3, fontWeight: 700 }}>
            b) Puntaje Promedio Competencia Lectora y Competencia Matemática 1 (M1) Mínimo de Postulación
          </Typography>
          <Typography variant="body2" paragraph>
            Podrán postular a las vacantes que la USM ofrece a través del Proceso Nacional de Admisión 2024, quienes hayan obtenido un Puntaje Promedio entre las pruebas de Competencia Lectora y Competencia Matemática 1 igual o superior a 485 puntos en escala de 100 a 1000.
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 1, mt: 3, fontWeight: 700 }}>
            c) Prueba Competencia Matemática M2
          </Typography>
          <Typography variant="body2" paragraph>
            Recuerda que para la admisión 2024 la prueba de Competencia Matemática M2 es obligatoria para postular a todas las Ingenierías y Licenciaturas que se imparten en la USM, exceptuando solo a Ingeniería Comercial.
          </Typography>

          <Typography variant="subtitle1" sx={{ mb: 1, mt: 3, fontWeight: 700 }}>
            d) Pruebas Optativas
          </Typography>
          <Typography variant="body2">
            Pueden rendir las pruebas optativas de Ciencias e Historia y Ciencias Sociales. Se considerará de mayor puntaje para calcular tu puntaje ponderado.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default AdmisionPAES;
