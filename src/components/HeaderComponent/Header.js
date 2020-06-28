import React, { useState } from "react";
import {  AppBar,Toolbar,IconButton,Typography,Link,Box,Hidden, Button } from "@material-ui/core";
import classNames from "classnames";

// styles
import SadguruStyle from '../../SadguruStyle';
import useStyles from "./style";

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';
import SideBarComponent from '../SideBarComponent/SideBarComponent';



export default function Header(props) {
    
    var classes = useStyles();
    var themeclasses = SadguruStyle();
  const preventDefault = (event) => event.preventDefault();

  return (
    <AppBar position="fixed" className={classes.HeaderStyle}>
    <Toolbar className={classes.HeaderToolBarStyle}>
        <Box  display="flex" className={classes.HeaderToolBarLeftStyle}>
            <Button className={classes.ProductImageOuterCard} href="/">
                <Typography  className={classes.ProductLogoDesign}>SADGURU&nbsp;&nbsp;TEA</Typography>
            </Button>
            
        </Box>
        <Box  display="flex">
        <Hidden only={['xs']}>
                <Box display="flex">
                    <Link  className={classNames(themeclasses.m10,themeclasses.mr15,classes.HeaderLinkActive )} activeClassName="active" component="a" variant="body2" 
                    // onClick={() => {props.history.push("/app/HomePage"); }}
                    href="/#/app/HomePage"
                    >
                        Home
                    </Link>
                    <Link  className={classNames(themeclasses.m10,themeclasses.mr15,classes.HeaderLinkActive )} component="a" variant="body2" 
                    // onClick={() => {props.history.push('/app/Artworks') }}
                    href="/#/app/Artworks"
                    >
                        Our Products
                    </Link>
                    <Link  className={classNames(themeclasses.m10,themeclasses.mr15,classes.HeaderLinkActive )} component="a" variant="body2" 
                    // onClick={() => {props.history.push('/app/Artworks') }}
                    target="_blank"  href="http://www.shrishtiart.com/"
                    >
                        Our Customers
                    </Link>
                   
                </Box>
            </Hidden>
            <Hidden only={['xs']}>
                <Box display="flex" alignItems="center">
                    
                    <IconButton aria-label="delete" className={themeclasses.p6} target="_blank">
                        <img  src="../../images/icon/facebook.svg" alt="Sadguru_logo"/>
                    </IconButton>
                    
                    <IconButton aria-label="delete" className={themeclasses.p6} target="_blank" >
                        <img  src="../../images/icon/twitter.svg" alt="Sadguru_logo"/>
                    </IconButton>
                    <IconButton aria-label="delete" className={themeclasses.pl6} target="_blank" >
                        <img  src="../../images/icon/insta.svg" alt="Sadguru_logo"/>
                    </IconButton>
                </Box>
            </Hidden>
            <Hidden only={['sm','lg','md','xl']}>
                
                <SideBarComponent  
                    pageWrapId={"page-wrap"}
                    outerContainerId={"App"}
                    history={props.history}
                    customBurgerIcon={ 
                        <IconButton edge="start" className={classes.HeadermenuButton} color="primary" aria-label="menu">
                            <MenuRoundedIcon style={{ fontSize: 40, }}/>
                        </IconButton>
                        }
                    // customCrossIcon={ 
                    //     <IconButton edge="start"  color="primary" aria-label="menu">
                    //         <CloseIcon />
                    //     </IconButton>
                    //     }   
                    right   isOpen={ false }
                />
            </Hidden>
            
        </Box>
        

    </Toolbar>
  </AppBar>
  );
}


