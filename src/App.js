import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage';


import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./Layout";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Layout/>
      </HashRouter>
    </div>
  );
}

export default App;
