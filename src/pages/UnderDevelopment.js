import { Box, Typography, Paper } from '@mui/material';

function UnderDevelopment() {
  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh' 
    }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          textAlign: 'center',
          maxWidth: 400
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Página en Desarrollo
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Esta sección se encuentra actualmente en desarrollo. 
          Próximamente estará disponible.
        </Typography>
      </Paper>
    </Box>
  );
}

export default UnderDevelopment;
