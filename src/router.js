import React, {Suspense, lazy} from 'react';
import {Route, Switch} from "react-router-dom";

// components list
import Users from "./pages/Users";
import Admin from "./pages/Admin";
import SignUp from "./pages/SignUp";
import Contacts from "./pages/Contacts";
import Loader from 'react-loader-spinner';
const Home = lazy(() => import("./pages/Home"));

const routes = (
    <Suspense fallback={<Loader type="Triangle" color="#1079f8" height={150} width={150}/>}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/user/:id" component={Users}/>
            <Route path="/admin/:id" component={Admin}/>
        </Switch>
    </Suspense>
);

export default routes