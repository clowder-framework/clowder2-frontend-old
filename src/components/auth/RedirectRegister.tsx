import React, {useEffect} from "react";
import {keycloak} from "../../keycloak";

export const RedirectRegister = (): JSX.Element => {
	useEffect(() => {
		keycloak.init({
			onLoad: "login-required",
			// redirectUri:"http://localhost:8000/api/v2/auth"
		}).success(function() {

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
