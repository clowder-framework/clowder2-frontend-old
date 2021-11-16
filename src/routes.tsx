import React from "react";
import {Route, Switch} from "react-router-dom";

import {App} from "./components/App";
import {Dataset} from "./components/Dataset";
import {File} from "./components/File";

const Routes = (
	<Switch>
		<Route exact path="/" render={() => {return (<App/>);}}/>
		<Route path="/datasets" render={() => {return (<Dataset/>);}}/>
		<Route path="/files" render={() => {return (<File/>);}}/>
	</Switch>);

export default Routes;
