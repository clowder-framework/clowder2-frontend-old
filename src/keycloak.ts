import Keycloak from "keycloak-js";

export const keycloak = Keycloak(
	{
		"realm": "clowder",
		"url": "http://localhost:8080/auth",
		"clientId":"clowder2-backend",
	}
)
