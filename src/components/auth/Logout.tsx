import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logout as logoutAction} from "../../actions/user";
import {Navigate} from "react-router-dom";
import {keycloak, redirectUri} from "../../keycloak";

export const Logout = (): JSX.Element => {
	const dispatch = useDispatch();
	const logout = () => dispatch(logoutAction());
	// component did mount
	useEffect(() => {
		// keycloak logout
		keycloak.init({}).then(function(){
			keycloak.logout({
				redirectUri: redirectUri
			}).then(function(){
				// remove token and dispatch atctions
				logout();
			});
		});
		}, []);

	return (
		<Navigate to={"/login"}/>
	);
}
