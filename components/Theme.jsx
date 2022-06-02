import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    regular: {
      fontSize: '13px',
      fontWeight: '200',
      textAlign: 'center',
      margin: '10px 30px',
      color: '#FFFFFF',
    },
    medium: {
      fontSize: '13px',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      textAlign: 'center',
      margin: '0 30px',
      color: '#FFFFFF',
    },
    bold: {
      fontSize: '38px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      margin: '10px 60px',
      color: '#FFFFFF',
    },
  },
  palette: {
    button: {
      blue: '#271AC1 ',
    },
    input: {
      white: '#FFFFFF',
    },
  },
});
theme = responsiveFontSizes(theme);

export { theme };
