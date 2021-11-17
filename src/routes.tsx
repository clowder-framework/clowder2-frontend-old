import React from "react";
import {Route, Switch} from "react-router-dom";

import {Dashboard} from "./components/Dashbard";
import {Dataset as DatasetComponent} from "./components/Dataset";
import {File as FileComponent} from "./components/File";

const Routes = (
	<Switch>
		<Route exact path="/" component={Dashboard} />
		<Route path="/dataset/:datasetId" component={DatasetComponent} />
		<Route path="/file/:fileId" component={FileComponent} />
	</Switch>
);


export default Routes;
