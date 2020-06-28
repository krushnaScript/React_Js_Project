import lightBlue from '@material-ui/core/colors/lightBlue';

import './assets/fonts/Rubik-Black.ttf';
import './assets/fonts/Rubik-BlackItalic.ttf';
import './assets/fonts/Rubik-Bold.ttf';
import './assets/fonts/Rubik-BoldItalic.ttf';
import './assets/fonts/Rubik-Italic.ttf';
import './assets/fonts/Rubik-Light.ttf';
import './assets/fonts/Rubik-LightItalic.ttf';
import './assets/fonts/Rubik-Medium.ttf';
import './assets/fonts/Rubik-MediumItalic.ttf';
import './assets/fonts/Rubik-Regular.ttf';

const SadguruTheme = {
    default    : {
        palette: {
            type     : '#000000',
            primary  : '#FBC517',
            secondary: {
                light: '#ffffff',
                main : '#ACB4C7',
                dark : '#646873',
            },
            error    : '#D24651'
        },
        status : {
            danger: '#00000029'
        }
    },


    sunset     : {
        palette: {
            type     : '#132144',
            primary  : {
                light: '#252525',
                main : '#d0605e',
                dark : '#27272C'
            },
            secondary: {
                light       : '#C9CDD8',
                main        : '#ff994c',
                dark        : '#ffca7b',
                contrastText: '#fff'
            },
            error    : 'red'
        },
        status : {
            danger: '#F9C417'
        }
    },
    
   

};

export default SadguruTheme;
