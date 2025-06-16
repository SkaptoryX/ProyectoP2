import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Breadcrumb({ items }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Typography variant="body2" color="text.secondary">
        {items.map((item, index) => (
          <span key={index}>
            {index > 0 && " > "}
            {item.path ? (
              <span
                onClick={() => navigate(item.path)}
                style={{
                  cursor: 'pointer',
                  color: '#00629b',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                {item.label}
              </span>
            ) : (
              item.label
            )}
          </span>
        ))}
      </Typography>
    </Box>
  );
}

export default Breadcrumb;
