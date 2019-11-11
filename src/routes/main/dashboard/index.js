import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "util/asyncComponent";
import Home from '../Home/home'
import contact from "../Contact/contact";
import Prevent from "../pages/prevent/prevent";
import Akut from "../pages/akut/akut";
import Efter from "../pages/efter/efter";
import Page from "../pages/page";
import automaticPush from "../pages/notifications/automaticPush";
import emergencyPush from "../pages/notifications/emergencyPush";


const Dashboard = ({ match }) => (
  <Switch>{
    console.log(match, 'match')

  }
    <Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
    <Route path={`${match.url}/dashboard`} component={Home} />
    <Route path={`${match.url}/prevent`} component={Prevent} />
    <Route path={`${match.url}/akut`} component={Akut} />
    <Route path={`${match.url}/efter`} component={Efter} />
    {/* <Route path={`${match.url}/efter`} component={Page} /> */}
    <Route path={`${match.url}/contact`} component={contact} />
    {/* <Route path={`${match.url}/contact`} component={contact} /> */}
    
    {/* push notification routes */}
    <Route path={`${match.url}/push/automatic`} component={automaticPush} />
    <Route path={`${match.url}/push/emergency`} component={emergencyPush} />
  </Switch>
);

export default Dashboard;
