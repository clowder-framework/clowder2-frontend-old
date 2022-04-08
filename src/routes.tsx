import React from "react";
import {Route, Navigate, Routes, BrowserRouter, Link} from "react-router-dom";

import {Dashboard} from "./components/Dashbard";
import {Dataset as DatasetComponent} from "./components/datasets/Dataset";
import {File as FileComponent} from "./components/files/File";
import {Register as RegisterComponent} from "./components/auth/Register";
import {RedirectLogin as RedirectLoginComponent} from "./components/auth/RedirectLogin";
import {Logout as LogoutComponent} from "./components/auth/Logout";
import {isAuthorized} from "./utils/common";

// https://dev.to/iamandrewluca/private-route-in-react-router-v6-lg5
class PrivateRoute extends React.Component<{ children: JSX.Element }> {
	render() {
		let {children} = this.props;
		return isAuthorized() ? children : <Navigate to="/login"/>;
	}
}


const AppRoutes = (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<div>Homepage placeholder</div>} />
			<Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
			<Route path="/datasets/:datasetId" element={<PrivateRoute><DatasetComponent/></PrivateRoute>} />
			<Route path="/files/:fileId" element={<PrivateRoute><FileComponent/></PrivateRoute>} />
			<Route path="/register" element={<RegisterComponent/>} />
			<Route path="/login" element={<RedirectLoginComponent/>} />
			<Route path="/logout" element={<LogoutComponent/>} />
		</Routes>
	</BrowserRouter>
);
export default AppRoutes;

