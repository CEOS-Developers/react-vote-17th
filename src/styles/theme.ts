import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#384084',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#ffff',
            backgroundColor: '#384084',
            '&:hover': {
              color: '#ffff',
              backgroundColor: '#38408480',
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: '#384084',
            backgroundColor: 'transparent',
            '&:hover': {
              color: '#ffff',
              backgroundColor: '#384084',
            },
          },
        },
      ],
    },
  },
});

export default theme;
