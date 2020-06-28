import { makeStyles } from "@material-ui/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
const drawerWidth = 240;

export default makeStyles(theme => ({
    HeaderFlex:{
        display: 'flex',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
    },
    root: {
        display: 'flex',
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        },
      },
      appBar: {
          backgroundColor:theme.palette.error.contrastText,
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: drawerWidth,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
    headerRightUserName:{
        fontFamily:'SFProDisplay-Medium',
        fontSize:16,
        color:'#292931',  
    },
    headerRightPostName:{
        fontFamily:'SFProDisplay-Regular',
        fontSize:12,
        color:'#9A98A6',  
    },
    headerRightFlexBox:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',

    },
    headerRightDropDown:{
        color:'#9A98A6',  
        fontSize:20,
    },
    SmallPopover:{
      width:120,
      height:"auto",
      padding:10,
      textAlign:'center'
    }

}));