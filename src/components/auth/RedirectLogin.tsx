import React, {useEffect} from "react";
import {keycloak} from "../../keycloak";

export const RedirectLogin = (): JSX.Element => {
	useEffect(() => {
		keycloak.init({onLoad: "login-required"}).success(function() {

			sessionStorage.setItem("kcToken", keycloak.token);
			sessionStorage.setItem("kcRefreshToken", keycloak.refreshToken);
			sessionStorage.setItem("kcTokenExpiry", keycloak.tokenParsed.exp);
			sessionStorage.setItem("isProxyAuth", "false");
		});
	}, []);

	return (
		<div>
			Redirecting to keycloak...
		</div>
	);
}
