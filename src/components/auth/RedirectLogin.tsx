import React, {useEffect} from "react";
import {keycloak, redirectUri} from "../../keycloak";
import {V2} from "../../openapi";
import {kcLoginHelper, SET_USER} from "../../actions/user";
import Cookies from "universal-cookie";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../types/data";
import {useNavigate} from "react-router-dom";


export const RedirectLogin = (): JSX.Element => {

	const cookies = new Cookies();
	const dispatch = useDispatch();
	const history = useNavigate();
	const loginError = useSelector((state:RootState) => state.user.loginError);
	const authorization = useSelector((state:RootState) => state.user.Authorization);
	const errorMsg = useSelector((state: RootState) => state.user.errorMsg);

	useEffect(() => {
		// initialize
		V2.OpenAPI.TOKEN = undefined;
		cookies.remove("Authorization", {path: "/"});

		keycloak.init({
			onLoad: "login-required",
			redirectUri: redirectUri,
		}).then(function() {
			if (keycloak.token !== undefined && keycloak.token !== "none") {
				kcLoginHelper(keycloak.token, keycloak.refreshToken, keycloak.tokenParsed.exp);
				return dispatch({
					type: SET_USER,
					Authorization: `Bearer ${keycloak.token}`,
				});
			}
		}).catch();
	}, []);

	useEffect(() => {
		if (authorization !== undefined && authorization !== "" && authorization !== null &&
			!loginError) { history("/dashboard");}
	}, [authorization,loginError,errorMsg]);


	return (
		<div>
			Redirecting to keycloak...
		</div>
	);
}
