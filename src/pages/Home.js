import { Grid, Card, CardContent, Typography, CardMedia, Box, Button } from '@mui/material';
import diurnoImg from '../assets/images/diurno.jpg';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const admissionCards = [
    {
      title: 'Pregrado Diurno',
      image: diurnoImg,
      items: ['Carreras']
    }
  ];

  return (
    <Box>
      <Box sx={{ 
        bgcolor: '#004a87', 
        color: 'white', 
        p: 2, 
        textAlign: 'center',
        mb: 3
      }}>
        <Typography variant="h6">
          Recorre nuestros campus o solicita una visita en tu colegio aquí!
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          Admisión
        </Typography>

        <Grid container spacing={4}>
          {admissionCards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ 
                    borderBottom: '2px solid #004a87',
                    pb: 1,
                    mb: 2
                  }}>
                    {card.title}
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{ mb: 1, textTransform: 'none' }}
                    onClick={() => navigate('/carreras')}
                  >
                    • Carreras
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
