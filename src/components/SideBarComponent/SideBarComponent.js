

import React from "react";
import {  Grid,TextField,Box,InputBase,IconButton,Typography,Hidden,Link,Button} from "@material-ui/core";
import { slide as Menu } from "react-burger-menu";
import classNames from "classnames";
// styles
import SadguruStyle from '../../SadguruStyle';
import useStyles from "./styles";





export default props => {

  var classes = useStyles();
  var themeclasses = SadguruStyle();
  // const preventDefault = (event) => event.preventDefault();

  return (
    // Pass on our props
    <Menu   {...props} styles={ styles } className={classes.SideMenuMenu} width={ '100%' }>
      <div className={classes.SideMenuTopWhite} >

      </div>
      <div className={classes.SideMenuMenuDiv}>
          <a className={classes.SideMenuMenuItem} href="/" >
            Home
          </a>

          <Link className={classes.SideMenuMenuItem}  onClick={() => {props.history.push('/#/app/Artworks'); window.location.reload() }} component="a" variant="body2" >
            Our&nbsp;&nbsp;Products
          </Link>
          <a className={classes.SideMenuMenuItem} href="http://www.shrishtiart.com/" target="_blank" onClick={() => {window.location.reload() }}>
            Our&nbsp;&nbsp;Customers
          </a>

          {/* <a className={classes.SideMenuMenuItem}>
           Arts And Gallery
          </a> */}
      <div style={{position:'fixed',bottom:'3vh'}}>
        <Box display="flex" alignItems="center">
          <Button  href="/">
            <img className={classes.FooterScreenBottomLogo} src="../../images/logo/shristi_logo.png" alt="shristi_logo"/>
          </Button>
        </Box>
        <Typography className={classes.FooterScreenBottomCopyRight}>© 2020 Shrishtiartgallery. All Rights Reserved</Typography>

        
      </div> 
      </div>       
     
    </Menu>
  );
};



var styles = {
  bmBurgerButton: {
    
  },
  bmBurgerBars: {
    background: '#373a47',
    
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
   
    right: '34px',
    top: '25px',
    '& button':{

    }
  },
  bmCross: {
    background: '#000000'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100vh',
    
  },
  bmMenu: {
    background: '#252525',
    
  },
  bmMorphShape: {
    fill: 'red'
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

