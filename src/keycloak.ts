import Keycloak from "keycloak-js";

export const keycloak = Keycloak(
	{
		"realm": "clowder",
		"url": "http://localhost:8080/auth",
		"clientId":"clowder2-frontend",
	}
)

export const redirectUri = "http://localhost:3000/login";
export const responseMode = "query";
