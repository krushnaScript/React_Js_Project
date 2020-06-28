import React, { useState, useEffect } from "react";
import {  Grid,Paper,Box,InputBase,IconButton,Typography,FormControl,InputLabel,NativeSelect,Hidden,CircularProgress} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles, withStyles } from '@material-ui/core/styles';
// styles
import SadguruStyle from '../../SadguruStyle';
import useStyles from "./styles";

import classNames from 'classnames';
import TablePagination from "@material-ui/core/TablePagination";
import ProductComponent from '../../components/PproductComponent/ProductComponent';


export default function ViewProducts(props) {
    
    var classes = useStyles();
    var themeclasses = SadguruStyle();
   

  return (
        <div>
            
            <Grid container direction="row" justify="space-between" alignItems="flex-start" >
                
                 <Grid item  >
                    
                    <Grid  container direction="row" alignItems="center" >
                        
                                   
                        
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/boost.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/honey.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/kissan_jam.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/salt.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/soap.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/boost.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid> 
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/boost.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/honey.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/kissan_jam.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/salt.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>
                        <Grid item md={3} xs={6} >
                            <ProductComponent history={props.history} ProductImage="../../images/soap.png" ProductTitel="Product Title" ProductMainName="Anand bekward" ProductNewPrice="2600" ProductOldPrice="6000"/>
                        </Grid>

                        </Grid>
            
                    </Grid>  
            </Grid>
            
        </div>
    );
}
