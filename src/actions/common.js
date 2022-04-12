import {kcLoginHelper, logoutHelper, SET_USER} from "./user";
import {keycloak} from "../keycloak";


export const RESET_FAILED = "RESET_FAILED";
export function resetFailedReason(){
	return (dispatch) => {
		dispatch({
			type:RESET_FAILED,
			reason:"",
			receivedAt: Date.now(),
		});
	};
}

export const RESET_LOGOUT = "RESET_LOGOUT";
export function resetLogout(){
	return (dispatch) => {
		dispatch({
			type:RESET_LOGOUT,
			receivedAt: Date.now(),
		});
	};
}

export const FAILED = "FAILED";
export function handleErrors(reason){
	// Authorization error we need to automatically logout user
	if (reason.status === 401){
		logoutHelper();
		keycloak.updateToken(30).then(() => {
			if (keycloak.token !== undefined && keycloak.token !== "none") {
				kcLoginHelper(keycloak.token, keycloak.refreshToken, keycloak.tokenParsed.exp);
				return (dispatch) => {
					dispatch({
						type: SET_USER,
						Authorization: `Bearer ${keycloak.token}`,
					});
				};
			}
		});
	}
	else{
		return (dispatch) => {
			dispatch({
				type: FAILED,
				reason: reason.message !== undefined? reason.message : "Backend Failure. Couldn't fetch!",
				stack: reason.stack ? reason.stack : "",
				receivedAt: Date.now()
			});
		};
	}
}
