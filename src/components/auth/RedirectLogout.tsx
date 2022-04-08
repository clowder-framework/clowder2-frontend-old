import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logout as logoutAction} from "../../actions/user";
import {keycloak} from "../../keycloak";
import {useNavigate} from "react-router-dom";

export const RedirectLogout = (): JSX.Element => {
	const dispatch = useDispatch();
	const history = useNavigate();
	const logout = () => dispatch(logoutAction());
	// component did mount
	useEffect(() => {
		// keycloak logout
		keycloak.init({}).then(function(){
			// remove token and dispatch action
			logout();
			keycloak.logout({
				redirectUri: history("/")
			});
		});
		}, []);

	return null;

}
