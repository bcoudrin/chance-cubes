import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from "@material-ui/core";
import './Footer.css';
import {ReactComponent as Logo} from '../../logo.svg';

class Footer extends Component {
  render() {
    const { i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <footer className="page-footer">
        <div className="footer-wrapper">
          <Grid container className="footer-links">
            <Grid item xs={5}>
              <Link to="/">
                <Logo className="footer-logo" width={64} fill="#103D5D"/>
                <Typography align="center" variant="h6" color={"primary"}>CHANCE CUBES</Typography>
              </Link>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={1} className="footer-links-col">
              <div className="footer-links-col-content">
                <Typography variant="button">{this.props.t('PROJECT')}</Typography><br/>
                <Typography variant="caption"><Link to="/changelog">{this.props.t('Changelog')}</Link></Typography><br/>
                <Typography variant="caption"><Link to="/about">{this.props.t('About')}</Link></Typography>
              </div>
            </Grid>
            <Grid item xs={1} className="footer-links-col">
              <div className="footer-links-col-content">
                <Typography variant="button">{this.props.t('CONTRIBUTE')}</Typography><br/>
                <Typography variant="caption"><a href="https://github.com/bcoudrin/chance-cubes" target="_blank" rel="noopener noreferrer">{this.props.t('Source code')}</a></Typography><br/>
                <Typography variant="caption"><a href="https://github.com/bcoudrin/chance-cubes/issues" target="_blank" rel="noopener noreferrer">{this.props.t('Bug reports')}</a></Typography>
              </div>
            </Grid>
            <Grid item xs={3} className="footer-links-col">
              <div className="footer-links-lang-col">
                <Button onClick={() => changeLanguage('fr')} size="small">FR</Button>
                <Button onClick={() => changeLanguage('en')} size="small">EN</Button>
              </div>
            </Grid>
          </Grid>
          <div className="footer-notice">
            <b>Chance Cubes</b> (2019-2020) {this.props.t('by')} <Link to='/about'>{this.props.t('Chance Cube team')}</Link>.{" "}
            {this.props.t('Source code licensed under ')} <a href='https://opensource.org/licenses/mit-license.php' target="_blank" rel="noopener noreferrer">MIT</a>,{" "}
            {this.props.t('Website unique and original content licensed under ')} <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a><br/>
            {this.props.t('Star Wars along with all characters and locations that have appeared in officially released materials are the properties of The Walt Disney Company and Lucasfilm Ltd. LLC.')} {" "}
            {this.props.t('Edge of the Empire, Age of Rebellion, Force and Destiny and Star Wars roleplaying game rules and contents created for the original games are the properties of Fantasy Flight Games.')} {" "}
            {this.props.t('Chance Cubes is not affiliated with, endorsed, sponsored, or specifically approved by Fantasy Flight Games, The Walt Disney Company or Lucasfilm Ltd. LLC.')}
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
