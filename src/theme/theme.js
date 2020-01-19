import { createMuiTheme } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
    palette: {
        primary: {
            light: '#103D5D',
            main: '#103D5D',
            dark: '#3f1b00',
            contrastText: '#fff'
        },
        /*secondary: {
            light: '#fffff3',
            main: '#e7dec0',
            dark: '#b5ac90',
            contrastText: '#000'
        }*/
        secondary: {
            light: '#ffffff',
            main: '#ffffff',
            dark: '#dddddd',
            contrastText: '#000'
        }
    },
    typography: {
        useNextVariants: true,
        h6: {
          fontSize: "1.1em",
          fontWeight: 900,
          fontFamily: "Segoe UI"
        }
    }
});

export default globalTheme;