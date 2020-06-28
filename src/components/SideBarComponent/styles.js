import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import SadguruTheme from '../../SadguruTheme';
import theme from '../../theme';
export default makeStyles(theme => ({
    SideMenuMenu:{
      
        '& nav':{
         '&:focus':{
             outline:'none'
           },
        },
        '& div':{
         '&:focus':{
             outline:'none'
           },
        }
     },
     SideMenuTopWhite:{
         backgroundColor:theme.palette.error.contrastText,
         width:'100%',
         height:65,
        
     },
    
     SideMenuMenuDiv:{
         margin:20,
         width:'90%',
     },
     SideMenuMenuItem:{
         display:'block',
         fontFamily:'Inter-Medium',
         fontSize:'3vh',
         color:theme.palette.error.contrastText,
         paddingBottom:20,
         borderBottomColor:theme.palette.primary.light,
         borderBottomWidth:2,
         borderBottomStyle:'solid',
         marginBottom:'5%',
         marginTop:'8%',
         textDecoration:'none',
     },
     FooterScreenBottomLogo:{
         maxWidth:110,
         width:'16vh',
     },
     FooterScreenBottomCopyRight:{
         color:theme.palette.primary.light,
         fontSize:14,
         lineHeight:1.5,
         marginTop:10,
 
     },
     FooterScreenBottomWtaLogo:{
         maxWidth:110,
         width:'9vh',
     }
    
}));
