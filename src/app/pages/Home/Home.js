import React, { Component } from "react";
import "./Home.css";
import { withTranslation } from "react-i18next";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
      </div>
    );
  }
}


export default withTranslation("translations")(Home);
