import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {

        primary: {
          light:"#646873",
          main:"#000000",
          dark:"#ACB4C7",
          contrastText: "#00000029",
        },
    
        secondary: {
            light:"#132144",
            main:"#FBC517",
            dark:"#252525",
            contrastText: "#27272C",
        },
    
        error: {
            light:"#C9CDD8",
            main:"#D24651",
            dark:"#3369FC",
            contrastText: "#FFFFFF",
        },
        warning: {
            light:"#0000000D",
            main:"#000000",
            dark:"#0caa41",
            contrastText: "#fff",
        },
        info: {
            light:"#0caa41",
            main:"#000000",
            dark:"#0caa41",
            contrastText: "#fff",
        },
        success: {
            light:"#35e317",
            main:"#474792",
            dark:"#0caa41",
            contrastText: "#fff",
        },
    
        text: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "#404040",
          disabled: "#ffff",
          hint: "rgba(0, 0, 0, 0.38)"
    
        },
    
      },
     
    
      typography: {
          fontFamily:'Rubik-Regular',
        h1: {
          fontSize: '100px',
          lineHeight: 1,
          color: '#0d0d0d',
    
        },
        h2: {
          fontSize: '48px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        h3: {
          fontSize: '36px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        h4: {
          fontSize: '30px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        h5: {
          fontSize: '26px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        h6: {
          fontSize: '24px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        subtitle1: {
          fontSize: '22px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        subtitle2: {
          fontSize: '20px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
    
        },
        body1: {
          fontSize: '18px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        body2: {
          fontSize: '16px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        caption: {
          fontSize: '14px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
        overline: {
          fontSize: '12px',
          fontFamily:'Rubik-Regular',
          lineHeight: 1,
        },
    
      }
    
});

export default theme ;