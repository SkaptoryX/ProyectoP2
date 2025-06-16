import { Box, Typography, Link, Breadcrumbs, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import admisionEspecialBanner from '../assets/images/admisionEspecialBanner.jpg';

function AdmisionEspecial() {
  const admissionTypes = [
    {
      title: "Postulantes Destacados",
      categories: [
        {
          name: "Ingreso Especial NEM",
          description: "El ingreso especial NEM valora el rendimiento académico alcanzado durante la Enseñanza Media, podrán postular estudiantes con egreso de Enseñanza Media de hasta un año previo a su postulación que hayan tenido un rendimiento de excelencia.",
          requirements: [
            "Egreso Enseñanza Media 2023 o 2024.",
            "Copia de Cédula de Identidad por ambos lados.",
            "Licencia de Educación Media.",
            "Certificación de concentración de notas de enseñanza media y/o Certificado de ubicación de egreso de Educación Media.*",
            "Copia de la tarjeta de inscripción a Prueba de Acceso a la Educación Superior (PAES) vigente."
          ]
        },
        {
          name: "Ingreso Deportista Destacado USM",
          description: "El ingreso de deportistas destacados a la USM se divide en tres categorías: Ingreso Deportista Destacado Ramas USM, Deportista en Formación de Elite e Ingreso Deportista Elite.",
          details: [
            "Ingreso Deportista Destacado Ramas USM: aquellos estudiantes que hayan tenido una trayectoria deportiva de excelencia durante su Enseñanza Media y que cuenten con Certificación de deportista destacado en alguno de los deportes reconocidos como 'rama deportiva' por la USM.",
            "Deportista en Formación de Elite: aquellos estudiantes que hayan tenido una trayectoria deportiva de excelencia durante su Enseñanza Media, participando en deportes de alto rendimiento y de proyección internacional.",
            "Ingreso Deportista Elite: aquellos estudiantes que hayan tenido una trayectoria deportiva de excelencia durante su Enseñanza Media, participando en deportes de alto rendimiento y de proyección internacional."
          ],
          requirements: [
            "Egreso Enseñanza Media 2023 o 2024.",
            "Copia de Cédula de Identidad por ambos lados.",
            "Licencia de Educación Media.",
            "Certificación de concentración de notas de enseñanza media.",
            "Copia de la tarjeta de inscripción a PAES vigente.",
            "Carta motivacional.",
            "Curriculum Deportivo.",
            "Certificado ubicación de egreso de Educación Media.",
            "Certificado de la organización deportiva a la que pertenece."
          ]
        }
      ]
    },
    {
      title: "Postulantes Programas USM",
      categories: [
        {
          name: "Ingreso Programa Preliminar de Ingeniería (PPI)",
          description: "Ingreso de admisión especial enfocado en estudiantes con egreso de Enseñanza Media durante el mismo año de su postulación y que hayan cursado y aprobado el Programa Preliminar de Ingeniería (PPI) de la USM.",
          requirements: [
            "Postular mediante el portal admision.usm.cl",
            "Copia de Cédula de Identidad por ambos lados",
            "Licencia de Educación Media",
            "Certificación de Concentración de Notas de Enseñanza Media",
            "Certificación de aprobación del Programa Preliminar para Ingeniería",
            "No ser estudiante regular de la USM"
          ]
        }
      ]
    },
    {
      title: "Postulantes con programas Internacionales y/o Provenientes del Extranjero",
      categories: [
        {
          name: "Ingreso con programas internacionales (IB, BAC, ECS, DIAP, ABITUR)",
          description: "Esta vía de ingreso permite a postulantes con egreso de Enseñanza Media de hasta un año previo a su postulación que hayan rendido y aprobado pruebas de carácter internacional que tengan convenio con la Universidad.",
          requirements: [
            "Copia de Cédula de Identidad por ambos lados",
            "Certificación de concentración de notas de enseñanza media",
            "Acreditar la aprobación del Programa de Bachillerato Internacional o Acreditar Puntaje ABITUR",
            "Puntaje IB mínimo de 24, o bien un puntaje BAC mínimo de 12, o un puntaje mínimo de 75 puntos en el Esame Conclusivo di Stato (ECS)"
          ]
        },
        {
          name: "Estudiantes que hayan concluido sus estudios de Enseñanza Media en el extranjero",
          description: "Esta vía de ingreso permite a los postulantes que hayan concluido sus estudios de Enseñanza Media o equivalente en el extranjero, participar de un Proceso Especial de Admisión.",
          requirements: [
            "Fotocopia de Cédula de Identidad o pasaporte, según corresponda",
            "Certificados de notas correspondientes a los estudios realizados, debidamente validados por el ministerio de educación chileno",
            "Documento que acredite su egreso de Enseñanza Media (o equivalente), validado en el Ministerio de Educación chileno",
            "Certificado con escala de calificaciones del país de origen y su equivalencia con las calificaciones chilenas"
          ]
        }
      ]
    },
    {
      title: "Postulantes Programas de Equidad",
      categories: [
        {
          name: "Ingreso Más Mujeres Científicas (+MC)",
          description: "La Universidad ofrece cupos supernumerarios en carreras STEM a alumnas, egresadas de Enseñanza Media, con el objetivo de incentivar y fomentar el ingreso en estas carreras y disminuir brechas de género."
        },
        {
          name: "Ingreso Programa de Acompañamiento y Acceso Efectivo (PACE)",
          description: "Podrán postular estudiantes con egreso de Enseñanza Media durante el mismo año de su postulación y que hayan cursado y aprobado el Programa de Acompañamiento y Acceso Efectivo (PACE).",
          requirements: [
            "El Ingreso Programa PACE es gestionado e informado por el Ministerio de Educación",
            "No ser estudiante regular de la USM"
          ],
          note: "Para más información visita pace.mineduc.cl"
        }
      ]
    }
  ];

  const nemRequirements = [
    { level: "6,5", programs: "Licenciatura en Física y Licenciatura en Astrofísica" },
    { level: "6,0", programs: "Ingenierías civiles" },
    { level: "5,5", programs: "Ingeniería en Diseño de Productos, Arquitectura, Ingeniería en Aviación Comercial, Construcción Civil e Ingeniería Comercial" },
    { level: "5,2", programs: "Ingenierías de 4 años" },
    { level: "5,0", programs: "Programas técnicos universitarios" }
  ];

  const applicationPeriods = [
    { period: "1º periodo", dates: "13 de septiembre de 2024 al 15 de noviembre de 2024" },
    { period: "2º periodo", dates: "16 de noviembre de 2024 al 23 de enero de 2025" }
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

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      {/* Banner section */}
      <Box sx={{ 
        position: 'relative',
        height: '300px',
        backgroundImage: `url(${admisionEspecialBanner})`,
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
            Admisión Especial
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link href="/" color="inherit" underline="hover">Inicio</Link>
          <Link href="/" color="inherit" underline="hover">Admisión</Link>
          <Typography color="text.primary">Admisión Especial</Typography>
        </Breadcrumbs>

        {/* Introduction */}
        <Typography paragraph sx={{ mb: 4 }}>
          En la USM reconocemos la diversidad de talentos y mérito de sus postulantes, por ello habilitamos el ingreso vía Admisión Especial, que permite acceder a una carrera sin la necesidad de obtener puntaje en la Prueba de Acceso a la Educación Superior (PAES). Cabe destacar que como Institución siempre recomendaremos la rendición de la prueba de acceso, ya que algunos beneficios ministeriales están vinculados a ésta.
        </Typography>

        {/* Admission Types */}
        {admissionTypes.map((type, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{
                bgcolor: '#f5f5f5',
                p: 2,
                fontWeight: 'bold',
                mb: 3
              }}
            >
              {type.title}
            </Typography>

            <Grid container spacing={3}>
              {type.categories.map((category, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Box sx={{ mb: 4, height: '100%' }}>
                    <Paper elevation={1} sx={{ p: 3, height: '100%' }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        {category.name}
                      </Typography>
                      <Typography paragraph sx={{ mb: 2 }}>
                        {category.description}
                      </Typography>
                      
                      {category.details && (
                        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                          {category.details.map((detail, i) => (
                            <Typography component="li" key={i} sx={{ mb: 1 }}>
                              {detail}
                            </Typography>
                          ))}
                        </Box>
                      )}

                      {category.requirements && (
                        <>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                            Requisitos y Documentos:
                          </Typography>
                          <Box component="ul" sx={{ pl: 2 }}>
                            {category.requirements.map((req, i) => (
                              <Typography component="li" key={i} sx={{ mb: 1 }}>
                                {req}
                              </Typography>
                            ))}
                          </Box>
                        </>
                      )}
                    </Paper>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        {/* Application Calendar */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Calendario de Postulación y Resultados
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                  <TableCell>Periodo</TableCell>
                  <TableCell>Postulaciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {applicationPeriods.map((period, index) => (
                  <TableRow key={index}>
                    <TableCell>{period.period}</TableCell>
                    <TableCell>{period.dates}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
            Calendario sujeto a extensiones o modificaciones hasta completar vacantes.
          </Typography>
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

        {/* Contact Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 3 }}>
            Contacto Ingreso Directo Carreras Técnicas Universitarias
          </Typography>
          <Grid container spacing={3}>
            {contactInfo.map((contact, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
                    {contact.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Fono: {contact.phone}
                  </Typography>
                  <Typography variant="body2">
                    Mail: {contact.email}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
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

        {/* Footer note */}
        <Typography sx={{ mt: 4, fontStyle: 'italic', color: '#666' }}>
          Los requisitos y condiciones pueden variar de un periodo a otro. Te invitamos a mantenerte informado visitando periódicamente usm.cl.
        </Typography>
      </Box>
    </Box>
  );
}

export default AdmisionEspecial;
