import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";

import {Dashboard} from "./components/Dashbard";
import {Dataset as DatasetComponent} from "./components/Dataset";
import {File as FileComponent} from "./components/File";
import {Login as LoginComponent} from "./components/Login";

import {isAuthorized} from "./utils/common";

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		isAuthorized()
			? <Component {...props} />
			: <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
	)} />
);

const Routes = (
	<Switch>

	</Switch>
	<Switch>
		<PrivateRoute exact path="/" component={Dashboard} />
		<PrivateRoute path="/datasets/:datasetId" component={DatasetComponent} />
		<PrivateRoute path="/files/:fileId" component={FileComponent} />
		<Route exact path="/login" component={LoginComponent} />
	</Switch>
);





export default Routes;
