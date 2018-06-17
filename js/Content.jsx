import React from "react";
import { Route, Switch } from "react-router-dom";
import Balance from "./Balance";
import Income from "./Income";
import Expenses from "./Expenses";
import Dashboard from "./Dashboard";

const Content = () => (
  <Switch>
    <Route exact path="/balance" component={Balance} />
    <Route exact path="/income" component={Income} />
    <Route exact path="/expenses" component={Expenses} />
    <Route component={Dashboard} />
  </Switch>
);

export default Content;
