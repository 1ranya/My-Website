import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import UsersList from "./usersList";
import HomeBody from "./homeBody";
import Hi from "./usersList";
import MyHelper from "./myHelper";
function AppRouter() {
  return (
    <div className="routesContainer">
      <Switch>
        <Route exact path="/" component={HomeBody} />
        {/* <Route exact path="/hi" component={Hi} /> */}
        <Route exact path="/userslist" component={UsersList} />
        <Route exact path="/myhelper" component={MyHelper} />
        {/* <Route exact path="/login" component={Login} />
          <Route exact path="/forgettenpw" component={ForgetMp} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/changePw" component={ChangePassword} /> */}
      </Switch>
    </div>
  );
}
export default AppRouter;
