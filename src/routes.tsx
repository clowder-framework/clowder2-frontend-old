import React from "react";
import {Route, Switch} from "react-router-dom";

import {Dashboard} from "./components/Dashbard";
import {Dataset as DatasetComponent} from "./components/Dataset";
// import {File} from "./components/File";

const Routes = (
	<Switch>
		<Route path="/dataset/:id" component={DatasetComponent} />
		<Route path="/" component={Dashboard} />
	</Switch>
);


export default Routes;
