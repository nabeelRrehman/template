import React from "react";
import { Route, Switch } from "react-router-dom";
import Widgets from "./Widgets";
import Metrics from "./Metrics";
import Dashboard from "./dashboard";
import Layouts from "./Layouts";
import asyncComponent from "../../util/asyncComponent";
import Contact from "./Contact/contact";
import { connect } from "react-redux";


const Main = ({ match }) => (
  <Switch>
    {
      console.log(match, 'matchhhhhh')
    }
    <Route path={`${match.url}/`} component={Dashboard} />
    {/* <Route path={`${match.url}/widgets`} component={Widgets}/>
    <Route path={`${match.url}/contact`} component={Contact} />
    <Route path={`${match.url}/layouts`} component={Layouts}/>
    <Route path={`${match.url}/algolia`} component={asyncComponent(() => import('../algolia'))}/> */}
  </Switch>
);

export default (Main);
