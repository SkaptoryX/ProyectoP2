import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">Inicio</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
