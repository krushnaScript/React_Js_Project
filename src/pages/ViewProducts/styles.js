import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  
    loader_root: {
        display: 'flex',
        alignItems: 'center',
        height: '50vh',
        '& > * + *': {
        marginLeft: theme.spacing(2),
        },
    },
    progress: {
        margin: "0 auto",
    },
    SearchBoxroot: {
        padding: '2px 25px',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 474,
        width:'100%',
        height:48,
        boxShadow:'none',
        borderRadius:100,
        borderColor:theme.palette.error.light,
        borderWidth:1,
        borderStyle:'solid',
        '@media (max-width: 599px) ': {
          maxWidth: '98%',
        },
      },
      SearchBoxrootHeader:{
        '@media (min-width: 600px) ': {
          flexWrap: 'nowrap',
        },
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        color:theme.palette.primary.main,
        fontSize:14,
      },
      iconButton: {
        padding: 10,
      },
      PageHeader:{
          fontSize:36,
          margin:0,
          paddingRight:10,
          fontFamily:'Inter-Bold',
          '@media (min-width: 600px) and (max-width: 768px) ': {
            fontSize:28,
          },
          '@media (min-width: 480px) and (max-width: 599px) ': {
            fontSize:30,
            marginBottom:32,
          },
          '@media (max-width: 480px) ': {
            fontSize:20,
            marginBottom:32,
          },
      },
      linestyle:{
          textDecoration:'line-through',
          fontSize:12,
          color:theme.palette.error.light,
          marginRight:10,
      },
      selectBox:{
          width:'100%',
          marginBottom:20,
          '& select':{
            '@media (max-width: 599px) ': {
              minWidth:'calc(23vw - 20px)',
            },
                maxWidth:165,
                width:'100%',
              borderRadius:100,
              '&:focus':{
                borderRadius:100,
                boxShadow:'none',
                borderColor:theme.palette.secondary.main, 
            }
          },
          '& svg':{
              position:'relative',
              right:38,
          },
          '@media (max-width:599px) ': {
            marginBottom:32,
          },
      },
      ResponsiveMarinTop:{
        marginTop:64,
        '@media (max-width:599px) ': {
          marginTop:32,
        },
      },
      ResponsiveMarinBottom:{
        marginBottom:64,
        '@media (max-width:599px) ': {
          marginBottom:24,
        },
      },
      ScrollableContent:{
        maxHeight:650,
        overflowY:'scroll',
        minHeight:'max-content'
        
      },
      ResponsiveMarinTopBottom:{
        marginBottom:40,
        marginTop:40,
        '@media (max-width:599px) ': {
          marginBottom:14,
          marginTop:32,

        },
      },
      PaginationSection:{
        marginBottom:32,
        marginTop:32,
        display:'flex',
        justifyContent:' center',
        '@media (max-width:599px) ': {
          marginBottom:20,
           marginTop:20,
           paddingLeft:0,
           '& p':{
             fontSize:10,
           }

        },
      }
    
      
}));
