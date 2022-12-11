import { Box, Link, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CopyRight = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant="subtitle2" gutterBottom>
        Feito com <FavoriteIcon /> por{' '}
        <Link href="https://www.linkedin.com/in/arthur-campolina/" target="_blank" underline="none">
          Arthur Campolina
        </Link>
      </Typography>
    </Box>
  );
};

export default CopyRight;
