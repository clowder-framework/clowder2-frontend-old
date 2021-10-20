import React from "react";
import {Route, Switch} from "react-router-dom";

import App from "./containers/App";
import Login from "./containers/Login";


export default (
	<Switch>
		<Route exact path="/" render={() => {return (<App/>);}}/>
		<Route exact path="/login" component={Login}/>
	</Switch>
);
