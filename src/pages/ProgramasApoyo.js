import { Box, Typography, Grid, Card, CardMedia, CardContent, Link, Breadcrumbs } from '@mui/material';
import apoyoBanner from '../assets/images/apoyoBanner.jpg';
import inclusionImg from '../assets/images/inclusion.jpg';
import pariolaImg from '../assets/images/pariola.jpg';
import tutoriasImg from '../assets/images/tutorias.jpg';
import besoImg from '../assets/images/beso.jpg';
import mentoriasImg from '../assets/images/mentorias.jpg';
import deportesImg from '../assets/images/deportes.jpg';
import culturaImg from '../assets/images/cultura.jpg';
import estudiantilImg from '../assets/images/estudiantil.jpg';
import discapacidadImg from '../assets/images/discapacidad.jpg';
import bibliotecaImg from '../assets/images/biblioteca.jpg';
import bienestarImg from '../assets/images/bienestar.jpg';

function ProgramasApoyo() {
  const sections = [
    {
      title: "Apoyo integral a estudiantes",
      description: "La Dirección de Relaciones Estudiantiles entrega apoyo socioeconómico y de bienestar integral a sus estudiantes durante su permanencia en la Universidad, así como el soporte para que se incorporen de manera activa y plena a la vida universitaria, a través de una amplia oferta de servicios y actividades extracurriculares.",
      items: [
        { title: "Programa de Inclusión", image: inclusionImg },
        { title: "Programa Pares de Ocupación", image: pariolaImg },
        { title: "Programa de Refuerzo Académico y Tutorías (PRAT)", image: tutoriasImg },
        { title: "Programa de apoyo Socioemocional (BESO)", image: besoImg },
        { title: "Servicios Pro mejor de calidad", image: mentoriasImg }
      ]
    },
    {
      title: "Vida Universitaria y actividades extracurriculares",
      description: "La USM brinda diversos programas que promueven la vida universitaria, el bienestar integral y el desarrollo de habilidades complementarias, entre las que se incluyen actividades deportivas, culturales y recreativas.",
      items: [
        { title: "Deportes", image: deportesImg },
        { title: "Cultura", image: culturaImg },
        { title: "Bienestar estudiantil", image: estudiantilImg }
      ]
    },
    {
      title: "Acompañamiento y servicios de apoyo académico",
      description: "La USM ofrece diferentes servicios de apoyo académico para facilitar el proceso de aprendizaje de sus estudiantes.",
      items: [
        { title: "Centro Integrado de Aprendizaje en Ciencias Básicas", image: discapacidadImg },
        { title: "Red de Bibliotecas USM", image: bibliotecaImg },
        { title: "Recursos tecnológicos", image: bienestarImg }
      ]
    }
  ];

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      <Box sx={{ 
        position: 'relative', 
        height: '300px',
        backgroundImage: `url(${apoyoBanner})`,
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
            Programas de Apoyo USM
          </Typography>
        </Box>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: 'auto', p: 4 }}>
        <Breadcrumbs sx={{ mb: 3 }}>
          <Link href="/" color="inherit" underline="hover">Inicio</Link>
          <Link href="/" color="inherit" underline="hover">Admisión</Link>
          <Typography color="text.primary">Programas de Apoyo USM</Typography>
        </Breadcrumbs>

        {sections.map((section, index) => (
          <Box key={index} sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ color: '#002C6C', mb: 2 }}>
              {section.title}
            </Typography>
            
            <Typography paragraph sx={{ color: '#666', mb: 4 }}>
              {section.description}
            </Typography>

            <Grid container spacing={3}>
              {section.items.map((item, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography variant="h6">
                        {item.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ProgramasApoyo;
