import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import useStyles from "./styles";
import {Grid,Box, Typography, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



export default function AddProduct() {
  const classes = useStyles();

  return (
      <div>
          <Typography className={classes.AddProductText}>ADD PRODUCT</Typography>
          <div style={{marginBottom:16,}}>
            <UploadPreview />
          </div>
        <form className={classes.AddProductInputFieldContainer} noValidate autoComplete="off">
            <TextField  fullWidth id="outlined-basic" label="Add Product Titel" variant="outlined" className={classes.AddProductInputField}/>
            <TextField  fullWidth id="outlined-basic" label="Add Product Name" variant="outlined" className={classes.AddProductInputField}/>
            <TextField  id="outlined-multiline-static" label="Add Product Description"  multiline rows={4} fullWidth variant="outlined" className={classes.AddProductInputField}/>
            <Grid container direction="row" justify="space-between" alignItems="center" spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField  fullWidth id="outlined-basic" label="Add Product Final Price" variant="outlined" className={classes.AddProductInputField} style={{marginRight:16}}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField  fullWidth id="outlined-basic" label="Add Product Initial Price" variant="outlined" className={classes.AddProductInputField}/>
                </Grid>
            </Grid>
            
        </form>
        <div className={classes.AddProductInputFieldContainer}>
            <Button fullWidth size="large" variant="contained" disableElevation>
                Add Product
            </Button>
        </div>
      </div>
   
  );
}

class UploadPreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = { file: null };
      this.onChange = this.onChange.bind(this);
      this.resetFile = this.resetFile.bind(this);
    }
    onChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      });
    }
  
    resetFile(event) {
      event.preventDefault();
      this.setState({ file: null });
    }
    render() {
      return (
        <div style={{ width: 650,}}>
          <input type="file" onChange={this.onChange} />
          
          <img resize="contain" style={{ width: "55%",display:'flex',margin:'auto',marginBottom:16,marginTop:16}} src={this.state.file} />
          {this.state.file && (
            <div style={{ textAlign: "center" }}>
                <Button fullWidth onClick={this.resetFile}  variant="contained"  color="default">
                    Remove File
                </Button>
            </div>
          )}
        </div>
      );
    }
  }