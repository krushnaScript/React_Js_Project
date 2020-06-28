import React, { useState } from "react";
import {  Card,CardActionArea,CardActions,CardContent,CardMedia,Typography,Button,Box,ButtonBase} from "@material-ui/core";
// styles
import SadguruStyle from '../../SadguruStyle';

import useStyles from "./styles";
import classNames from 'classnames';



export default function ProductComponent(props) {
  const classes = useStyles();
  var themeclasses = SadguruStyle();


  return (
    <Card className={classes.ProductImageMainCard}>
            <Box style={{width:'100%',display: 'block',textAlign: 'inherit'}}>

                {/* <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="100%"
                image={props.ProductImage}
                title="Contemplative Reptile"
                className={classes.ProductImageCard}
                /> */}
                <ButtonBase className={classes.ProductImageOuterCard}>
                 <img resize="contain" className={classes.ProductImageCard} alt="complex" src={props.ProductImage} />
                </ButtonBase>
                
                <CardContent style={{padding:16,}}>
                    <Typography className={classes.ProductImageTitel}>
                            {props.ProductTitel}
                    </Typography>
                    <Typography className={classes.ProductImageHeader}>
                            {props.ProductMainName}
                    </Typography>
                    <Box display="flex">
                        <Typography className={classes.ProductNewPrice}>
                            ₹&nbsp;{props.ProductNewPrice}
                        </Typography>
                        <Typography className={classes.ProductOldPrice}>
                                ₹&nbsp;{props.ProductOldPrice}
                        </Typography>
                    </Box>
                    <Button variant="contained"  disableElevation style={{width:'100%',marginTop:16,}}>
                        Edit Product
                    </Button>
                </CardContent>
                
            </Box>
            
        </Card>
  );
}
