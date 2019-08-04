import React, { Component } from "react";
import axios from "axios";
import "../css/usersList.css";

class UsersList extends Component {
  state = { users: [] };
  fetchData = () => {
    axios
      .get("http://localhost:4000/user/5")

      .then(response => {
        console.log(response.data);
        this.setState({ users: response.data });
        console.log(this.state.users);
      });
  };

  render() {
    return (
      <section class="hero is-success is-fullheight">
        <div class="hero-body userListBody">
          <div class=" userListBody Container">
            <div className="button" onClick={this.fetchData}>
              {" "}
              Show users list{" "}
            </div>
            <h1 class=" title userListTitle">List of users </h1>
            <div className="card globalCard">
              {this.state.users.map((user, index) => {
                return (
                  <div className="card bodyCard" key={index}>
                    <h1>First name: {user.firstName}</h1>
                    <h1>Last name: {user.lastName}</h1>
                    <h1>Email: {user.email}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UsersList;
