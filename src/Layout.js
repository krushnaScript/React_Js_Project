import React from "react";
import { Route, Switch, Redirect, withRouter ,useHistory } from "react-router-dom";
import classnames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

// styles

// components
import Header from "./components/HeaderComponent/Header";
// import FooterComponent from "./components/FooterComponent/FooterComponent";

import { createBrowserHistory } from 'history';

// pages
import HomePage from "./pages/HomePage/HomePage";
import Products from "./pages/ProductsPage/Products";
import ViewProducts from "./pages/ViewProducts/ViewProducts";
import AddPproduct from "./pages/AddProduct/AddPproduct";
import EditProduct from "./pages/EditProduct/EditProduct";


const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  container: {
    // minHeight: '100vh',
    display: 'flex',
    backgroundColor:'#F2F2F2',
    '@media all and (-ms-high-contrast:none)': {
      height: 0 // IE11 fix
    }
  },
  content: {
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
    marginTop: 70,
    marginLeft:250,
    [theme.breakpoints.down('xs')]: {
        marginTop: 70,
        marginLeft:16,
        marginRight:16,
    }
  }
}));

function Layout(props) {

  const classes = useStyles();

  // global
//   var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <HomePage history={history}/>

        <div
          className={classes.content}
        >
          {/* <div className={classes.fakeToolbar} /> */}
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/ViewProducts" />} />
            <Route path="/app/ViewProducts" component={ViewProducts} />
            <Route path="/app/AddPproduct" component={AddPproduct} />
            <Route path="/app/EditProduct" component={EditProduct} />

            {/* <Route path="/app/Artworks" component={ArtWorkViewAllPage} />
            <Route path="/app/Artists" component={ArtistPage} />
            <Route path="/app/Artwork_Artist/:id" component={ArtDescriptionPage} /> */}
     
            {/* <Route path="/app/tireinstalation" component={TireInstalation} /> */}
          </Switch>
        </div>
        {/* <FooterComponent/> */}
      </>
    </div>
  );
}

export default withRouter(Layout);




