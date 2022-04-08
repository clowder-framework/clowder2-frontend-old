import {LOGOUT, logoutHelper} from "./user";
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
		return (dispatch) => {
			// keycloak.onTokenExpired = () => {
			// 	console.log('token expired', keycloak.token);
			// 	keycloak.updateToken(30).then(() => {
			// 		console.log('successfully get a new token', keycloak.token);
			// 	})
			// }
			dispatch({
				type: LOGOUT,
				receivedAt: Date.now()
			});
		};
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
