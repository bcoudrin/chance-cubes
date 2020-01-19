import React from 'react';
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';

import {ReactComponent as Logo} from './logo.svg';
import './App.css';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Routes from "./routes/routes";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <AppBar position="static" color="primary" className="appbar">
          <Toolbar className="toolbar">
            <Link to='/'>
              <div>
                <Logo className="logo-image" fill="white" width={32} height={32} />
                <Typography className="logo-text" variant="h6">CHANCE CUBES</Typography>
              </div>
            </Link>
          </Toolbar>
        </AppBar>

        <div className="body-container">
          <Routes />
        </div>
        <Footer />
    </div>
  );
}

export default withTranslation()(App);
