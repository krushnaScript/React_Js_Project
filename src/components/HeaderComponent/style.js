import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SadguruTheme from '../../SadguruTheme';

export default makeStyles(theme => ({
    ProductLogoDesign:{
        fontFamily:'Rubik-Medium',
        fontSize:20,
    },
    HeaderStyle:{
        backgroundColor:SadguruTheme.default.palette.secondary.light,
        paddingLeft:'5%',
        paddingRight:'5%',
        boxShadow: '0px 2px 2px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        '@media (max-width:599px)': {
            paddingRight:'2%',
    
          },
    },
    HeaderToolBarStyle:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:0,
        paddingRight:0,
        
    },
    HeaderToolBarLeftStyle:{
        justifyContent:'space-between',
        alignItems:'center',
    },
    LogoStyle:{
       width:130,
       '@media (max-width:599px)': {
        width:90,

      },
    },
    HeaderLinkActive:{
        fontFamily:'Rubik-Medium',
        display:'flex',
        alignItems:'center',
        '&:hover':{
            borderBottomColor:theme.palette.secondary.main,
            borderBottomWidth:2,
            borderBottomStyle:'solid',
            textDecoration:'none',
        },
        '&:focus':{
            borderBottomColor:theme.palette.secondary.main,
            borderBottomWidth:2,
            borderBottomStyle:'solid',
        },
        '&:active':{
            borderBottomColor:theme.palette.secondary.main,
            borderBottomWidth:2,
            borderBottomStyle:'solid',
        },
        '&:focus-within':{
            borderBottomColor:theme.palette.secondary.main,
            borderBottomWidth:2,
            borderBottomStyle:'solid',
        },
        '&:visited':{
            borderBottomColor:theme.palette.secondary.main,
            borderBottomWidth:2,
            borderBottomStyle:'solid',
        }
    },
    Share_Button:{
        color:'#646873',
        fontSize:16,
        paddingRight:10,
        cursor:'pointer',
        '&:hover':{
            textDecoration:'none',
        },
    }   
}));
