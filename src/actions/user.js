import {V2} from "../openapi";
import keycloak from "../keycloak";

export const userActions = {
	login,
	logout
};

export async function loginHelper(email, password, first_name=null, last_name=null, register = false) {
	const data = {"email": email, "password": password};
	if (register) {
		return V2.UsersService.saveUserApiV2UsersPost({...data, "first_name":first_name, "last_name": last_name})
			.then(user => {return user;})
			.catch(reason => {
			// logout();
				return {"errorMsg": `Failed to register a user! ${reason}`};
			});
	} else {
		return V2.LoginService.loginApiV2LoginPost(data)
			.then(user => {return user;})
			.catch(reason => {
			// logout();
				return {"errorMsg": `Failed to login a user! ${reason}`};
			});
	}
}

export async function logoutHelper(){
	V2.OpenAPI.TOKEN = undefined;
	localStorage.removeItem("Authorization");
}

export const LOGIN_ERROR = "LOGIN_ERROR";
export const SET_USER = "SET_USER";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_ERROR = "REGISTER_ERROR";
export const LOGOUT = "LOGOUT";

export function login() {
	return async (dispatch) => {
		// clear cached login info
		V2.OpenAPI.TOKEN = undefined;
		localStorage.removeItem("Authorization");

		keycloak.init("login-required").then(function(authenticated) {
			if (authenticated)  {
				localStorage.setItem("Authorization", `bearer ${keycloak.token}`);
				V2.OpenAPI.TOKEN = keycloak.token;
				return dispatch({
					type: SET_USER,
					Authorization: `bearer ${keycloak.token}`,
				});
			}
			else {
				return dispatch({
					type: LOGIN_ERROR,
					errorMsg: "Not Authenticated!"
				});
			}
		}).catch(function() {
			return dispatch({
				type: LOGIN_ERROR,
				errorMsg: "Fail to Connect to keycloak!"
			});
		});
	};
}

export function register(email, password, firstname, lastname) {
	return async (dispatch) => {
		const json = await loginHelper(email, password, firstname, lastname, true);
		if (json["email"] !== undefined && json["hashed_password"] !== undefined) {
			return dispatch({
				type: REGISTER_USER,
			});
		} else {
			return dispatch({
				type: REGISTER_ERROR,
				errorMsg: json["errorMsg"] !== undefined && json["errorMsg"] !== "" ? json["errorMsg"]: "Fail to register!"
			});
		}
	};
}

export function logout() {
	return (dispatch) => {
		keycloak.logout({redirectUri:"/login"}).then(()=>{
			V2.OpenAPI.TOKEN = undefined;
			localStorage.removeItem("Authorization");
			return dispatch({
				type: LOGOUT,
			});
		});
	};
}
