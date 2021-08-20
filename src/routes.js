import React from "react";
import {Route, Switch} from "react-router-dom";

import App from "./containers/App";
import Uploader from "./components/childComponents/Uploader";


export default (
	<Switch>
		<Route exact path="/" render={() => {return (<App/>);}}/>
		<Route exact path="/upload" render={() => {return (<Uploader/>);}}/>
		{/*<Route exact path="/file" render={(props) => {return (<File {...props}/>);}}/>*/}
	</Switch>
);
