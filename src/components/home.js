import React, { Component } from "react";
import AppRouter from "./Routers";
import { Link } from "react-router-dom";
import "../css/home.css";
class Home extends Component {
  state = {};

  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-head">
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <Link class="navbar-item">
                  {/* <img src={logo} alt="Logo" width="50px" height="50px" /> */}
                </Link>
                <span
                  class="navbar-burger burger"
                  data-target="navbarMenuHeroC"
                >
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <div id="navbarMenuHeroC" class="navbar-menu">
                <div class="navbar-end">
                  <Link class="navbar-item" to="/hi">
                    Hi
                  </Link>
                  <Link class="navbar-item" to="/userslist">
                    Users list
                  </Link>
                  <Link class="navbar-item" to="/myhelper">
                    My helper
                  </Link>
                </div>
              </div>
            </div>
          </header>
        </div>

        <AppRouter />
      </section>
    );
  }
}

export default Home;
