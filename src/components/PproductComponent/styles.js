import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  ProductImageOuterHoverCard:{
'&:hover':{
  textDecoration:'none',
  backgroundColor:'unset',
}
  },
    ProductImageMainCard:{
        maxWidth:300,
        // boxShadow:'none',
        margin:'auto',
        width:'100%',
        marginBottom:40,
        backgroundColor:'transparent',
        '@media (min-width: 481px) and (max-width: 768px) ': {
          marginBottom:30,
        },
        '@media (max-width: 480px) ': {
          marginBottom:1,
          width:'100%',
          padding:0,
        },
  },
  ProductImageCard:{
    maxWidth:260,
    width:'100%',
    maxHeight: 270,
    objectFit:'contain',
    padding:16,
    // '@media (min-width: 600px) and (max-width: 768px) ': {
    //   maxHeight: 190,
    // },
    '@media (max-width: 480px) ': {
      maxHeight: 150,
    },

  },
  ProductImageOuterCard:{
    display: 'flex',
    margin: 'auto',
    height:240,
    backgroundColor:theme.palette.error.contrastText,
    objectFit:'cover',
    // '@media (min-width: 600px) and (max-width: 768px)': {
    //   maxHeight: 190,
    // },
    '@media (max-width: 480px) ': {
      maxHeight: 150,
    },
  },

  ProductImageTitel:{
    fontFamily:'Rubik-Regular',
    fontSize:14,
    color:theme.palette.primary.light,
    marginBottom:6,
    textAlign:'left',
    textTransform:'capitalize',
    '@media (min-width: 480px) and (max-width: 768px) ': {
      fontSize:12,
    },
    '@media (max-width: 480px) ': {
      fontSize:11,
    },
  },
  ProductImageHeader:{
    fontFamily:'Rubik-Regular',
    fontSize:18,
    color:theme.palette.secondary.contrastText,
    marginBottom:17,
    textAlign:'left',
    textTransform:'capitalize',
    '@media (min-width: 480px) and (max-width: 768px) ': {
      fontSize:18,
    },
    '@media (max-width: 480px) ': {
      fontSize:14,
    },
  },
  ProductNewPrice:{
    fontFamily:'Rubik-Medium',
    fontSize:16,
    color:theme.palette.primary.light,
    paddingRight:13,
    '@media (min-width: 480px) and (max-width: 768px) ': {
      fontSize:14,
    },
    '@media (max-width: 480px) ': {
      fontSize:12,
    },
  },
  ProductOldPrice:{
    fontFamily:'Rubik-Regular',
    fontSize:16,
    color:theme.palette.primary.light,
    textDecoration:'line-through',
    '@media (min-width: 480px) and (max-width: 768px) ': {
      fontSize:14,
    },
    '@media (max-width: 480px) ': {
      fontSize:12,
    },
  },
}));
