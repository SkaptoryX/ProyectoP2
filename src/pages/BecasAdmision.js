import { Box, Typography, Link, Breadcrumbs, Paper } from '@mui/material';
import becasBanner from '../assets/images/becasBanner.jpg';

function BecasAdmision() {
  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      <Box sx={{ 
        position: 'relative', 
        height: '300px',
        backgroundImage: `url(${becasBanner})`,
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
            Becas Admisión 2025
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link href="/" color="inherit" underline="hover">Inicio</Link>
          <Link href="/" color="inherit" underline="hover">Admisión</Link>
          <Typography color="text.primary">Becas Admisión 2025</Typography>
        </Breadcrumbs>

        <Typography variant="h4" sx={{ mb: 4, color: '#002C6C' }}>
          La Universidad Técnica Federico Santa María ofrece las siguientes Becas de Admisión:
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                bgcolor: '#ffa726',
                color: 'white',
                p: 2,
                fontWeight: 'bold',
                mb: 3
              }}
            >
              Premio Puntaje Máximo PAES
            </Typography>

            <Box sx={{ px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Beneficios:
              </Typography>
              <Typography paragraph sx={{ ml: 2, mb: 3 }}>
                Beca de arancel y matrícula por la duración nominal de la carrera en la cual has sido seleccionado vía admisión centralizada en el proceso de Admisión 2025.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Requisitos:
              </Typography>
              <Box component="ul" sx={{ ml: 4, mb: 3 }}>
                <Typography component="li" sx={{ mb: 1 }}>
                  Ser egresado de enseñanza media en 2024.
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Obtener uno o más puntajes máximos (1.000 puntos) en las Pruebas de Acceso a la Educación Superior (PAES) 2024.
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Obtener un puntaje ponderado USM igual o superior a 850 puntos en la carrera en la cual has sido seleccionado.
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Estar seleccionado en la USM vía Admisión Centralizada en el proceso de Admisión 2025.
                </Typography>
              </Box>

              <Typography paragraph sx={{ mb: 2 }}>
                Este premio es renovable bajo las siguientes condiciones: Obtener un rendimiento académico de excelencia en la Universidad, lo que implica no reprobar ninguna asignatura, alcanzando un promedio anual ponderado (en escala de 0 a 100) en primer año igual o superior a 67, y de segundo año en adelante, un promedio anual igual o superior a 70 (Equivalente a 5,0 y 5,2 respectivamente en escala de 1 a 7).
              </Typography>

              <Typography paragraph>
                Los alumnos con puntaje máximo PAES, destacados académicamente y con la debida recomendación de dos profesores jornada completa de la Universidad, podrán extender el beneficio de exención de arancel y matrícula, para los programas de postgrado científicos- tecnológicos impartidos por la USM.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              sx={{
                bgcolor: '#ffa726',
                color: 'white',
                p: 2,
                fontWeight: 'bold',
                mb: 3
              }}
            >
              Premio a la Excelencia para Primer Año*
            </Typography>

            <Box sx={{ px: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Beneficio:
              </Typography>
              <Typography paragraph sx={{ ml: 2, mb: 3 }}>
                Liberación total o parcial del pago del arancel sólo por el primer año, considerando el puntaje ponderado USM obtenido para la carrera en la que fue seleccionado. De acuerdo a la siguiente tabla:
              </Typography>
              
              <Box sx={{ 
                ml: 2, 
                mb: 3,
                display: 'table',
                width: '100%',
                borderCollapse: 'collapse',
                '& > div': {
                  display: 'table-row',
                  '& > div': {
                    display: 'table-cell',
                    padding: '8px',
                    borderBottom: '1px solid #ddd'
                  }
                }
              }}>
                <Box sx={{ bgcolor: '#f5f5f5' }}>
                  <Box sx={{ fontWeight: 'bold' }}>Puntaje Ponderado USM</Box>
                  <Box sx={{ fontWeight: 'bold' }}>Exención Arancel 1er Año</Box>
                </Box>
                <Box>
                  <Box>Mayor o igual a 900 puntos</Box>
                  <Box>100%</Box>
                </Box>
                <Box>
                  <Box>Mayor o igual a 880 puntos y menor a 900 puntos</Box>
                  <Box>75%</Box>
                </Box>
                <Box>
                  <Box>Mayor o igual a 860 puntos y menor a 880 puntos</Box>
                  <Box>50%</Box>
                </Box>
                <Box>
                  <Box>Mayor o igual a 840 puntos y menor a 860 puntos*</Box>
                  <Box>50%</Box>
                </Box>
              </Box>

              <Typography 
                variant="body2" 
                sx={{ 
                  ml: 2, 
                  fontStyle: 'italic', 
                  mb: 3 
                }}
              >
                *Solo para alumnos egresados de establecimientos educacionales municipales.
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Requisitos:
              </Typography>
              <Box component="ul" sx={{ ml: 4, mb: 3 }}>
                <Typography component="li" sx={{ mb: 1 }}>
                  Ser egresado de Enseñanza Media en los años 2023 o 2024.
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  Estar seleccionado en la USM vía Admisión Centralizada en el proceso de Admisión 2025.
                </Typography>
                <Typography component="li" sx={{ mb: 1 }}>
                  No haber sido alumno regular USM durante el año 2024.
                </Typography>
              </Box>

              <Typography 
                sx={{ 
                  ml: 2,
                  fontStyle: 'italic'
                }}
              >
                Nota: Este beneficio de exención de arancel es sólo por el primer año y no contempla la matrícula.
              </Typography>
            </Box>
          </Box>

          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ color: '#002C6C', fontWeight: 'bold', mb: 2 }}>
              Beca Ingreso Programa Propedéutico "Ex Umbra in Solem"
            </Typography>
            <Typography paragraph>
              Esta beca beneficia a quienes sean admitidos mediante la vía de Ingreso Especial Programa Propedéutico "Ex Umbra in Solem". Considera la liberación total del pago de matrícula y arancel durante los dos primeros años de estudio, sin ser posible su extensión.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Requisitos:</Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li">Postular en primera preferencia a la Universidad Técnica Federico Santa María.</Typography>
            </Box>
          </Paper>

          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ color: '#002C6C', fontWeight: 'bold', mb: 2 }}>
              Beca de primer año al mérito académico para estudiantes nuevos vía admisión especial centralizada Deportista Destacado
            </Typography>
            <Typography paragraph>
              Esta beca beneficia a postulantes nuevos que obtengan el mayor puntaje de postulación Vía Admisión Especial Centralizada Deportista Destacado. El beneficio considera la liberación total del pago del arancel sólo por el primer año, sin ser posible su extensión.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Requisitos:</Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li">Ser egresado de Enseñanza Media del año en curso o anterior.</Typography>
              <Typography component="li">Haber alcanzado el mayor puntaje ponderado en el proceso de Admisión centralizada Deportista Destacado.</Typography>
            </Box>
          </Paper>

          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ color: '#002C6C', fontWeight: 'bold', mb: 2 }}>
              Beca de primer año al mérito académico para estudiantes nuevos vía admisión especial centralizada Deportista en Formación Élite
            </Typography>
            <Typography paragraph>
              Esta beca beneficia a postulantes nuevos que obtengan el mayor puntaje de postulación Vía Admisión Especial Centralizada Deportista en Formación Élite. El beneficio considera la liberación de hasta un 50% del pago su arancel anual por la duración nominal de la carrera.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Requisitos:</Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li">Ser egresado de Enseñanza Media del año en curso o anterior.</Typography>
              <Typography component="li">Haber alcanzado el mayor puntaje ponderado en el proceso de Admisión centralizada Deportista en Formación Élite.</Typography>
            </Box>
          </Paper>

          <Paper elevation={1} sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ color: '#002C6C', fontWeight: 'bold', mb: 2 }}>
              Beca de primer año al mérito académico para estudiantes nuevos vía admisión especial centralizada Deportista Élite
            </Typography>
            <Typography paragraph>
              Esta beca beneficia a postulantes nuevos que obtengan el mayor puntaje de postulación Vía Admisión Especial Centralizada Deportistas Élite. El beneficio considera la liberación total del pago del arancel y matrícula por la duración nominal de la carrera.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2 }}>Requisitos:</Typography>
            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li">Ser egresado de Enseñanza Media del año en curso o anterior.</Typography>
              <Typography component="li">Haber alcanzado el mayor puntaje ponderado en el proceso de Admisión centralizada Deportista Élite.</Typography>
            </Box>
          </Paper>
        </Box>

        <Typography sx={{ mt: 4, fontStyle: 'italic', color: '#666' }}>
          Los requisitos y condiciones pueden variar de un periodo a otro. Te invitamos a mantenerte informado visitando periódicamente usm.cl
        </Typography>
      </Box>
    </Box>
  );
}

export default BecasAdmision;
