import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode: mode,
    },
    typography: {
      
    },
  });

export default getTheme;
