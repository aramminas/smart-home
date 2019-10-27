import React from 'react';
import { Route, Switch } from "react-router-dom";

// components list
import Home from "./pages/Home";
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import SignUp from "./pages/SignUp";

const routes = (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/user/:id" component={Users}/>
        <Route path="/admin/:id" component={Admin}/>
    </Switch>
);

export default routes