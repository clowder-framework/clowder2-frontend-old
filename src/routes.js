import React from "react";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import App from "./containers/App";
import Login from "./containers/Login";
import {isAuthorized} from "./utils/common";


export const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		isAuthorized()
			? <Component {...props} />
			: <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
	)} />
)

export default (
	<BrowserRouter>
		<div>
			<PrivateRoute exact path="/" component={App} />
			<Route exact path="/login" component={Login} />
		</div>
	</BrowserRouter>
);
