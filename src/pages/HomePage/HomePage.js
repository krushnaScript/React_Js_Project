import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link,Popover,Button,Typography,Box,Toolbar,ListItemText,ListItemIcon,ListItem,List,Hidden,Drawer,Divider,CssBaseline,AppBar} from '@material-ui/core'
import useStyles from "./styles";

import { withRouter } from "react-router-dom";


// const useStyles = makeStyles((theme) => ({
  
// }));

function HomePage(props) {


  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} />
      <Divider /> */}
      <List>
          <Link href="/#/app/ViewProducts">
            <ListItem  >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="View Products" />
            </ListItem>
          </Link>
          <Link href="/#/app/AddPproduct">
            <ListItem >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Add Products" />
            </ListItem>
          </Link>
          <Link href="/#/app/EditProduct">
            <ListItem button >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Edit Products" />
            </ListItem>
          </Link>
          <Link href="/#/app/Products">
            <ListItem >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItem>
          </Link>
      </List>
      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.HeaderFlex}>
                <div>
                    <Typography variant="h6"color="primary" noWrap>
                        SADGURU&nbsp;TEA&nbsp;SHOP
                    </Typography>
                </div>
                <div>
                    <Typography color="primary" className={classes.headerRightUserName}>Krushna Chandra</Typography>
                    <div className={classes.headerRightFlexBox}>
                        <Button onClick={handleClick}>
                          <Typography className={classes.headerRightPostName} >Admin User</Typography>
                          <ExpandMoreIcon className={classes.headerRightDropDown}/>
                        </Button>
                        <Popover
                          id={id}
                          open={open}
                          anchorEl={anchorEl}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                          }}
                          
                        >
                          <div className={classes.SmallPopover}>
                            <Link component="button">
                              <Typography >LogOut</Typography>
                            </Link>
                            <Link component="button">
                              <Typography ></Typography>
                            </Link>
                          </div>
                          
                        </Popover>
                    </div> 
                </div>
          </div>
        
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      
    </div>
  );
}


export default HomePage;
