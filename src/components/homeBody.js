import React, { Component } from "react";
import "../css/homeBody.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

class HomeBody extends Component {
  state = {};
  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-body homeBody columns">
          <div className="text-left column">
            <h1 className="text-top">
              Creating your hand made own online world, It's awsome.
            </h1>
            <p className="text-bottom">Since you are in, Here we go! </p>
          </div>
          <div className="column">
            <Link to="/hi">
              <img
                src={logo}
                alt="Logo"
                width="250px"
                height="250px"
                className="homeLogo"
              />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeBody;
