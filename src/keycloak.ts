import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
	// replace them with our keycloak setups
	url: "http://localhost:8080/auth",
	realm: "Keycloak-react-auth",
	clientId: "React-auth",
});

export default keycloak;
