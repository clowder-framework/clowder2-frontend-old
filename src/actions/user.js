import config from "../app.config";
import {getHeader} from "../utils/common";
import {RECEIVE_FILE_EXTRACTED_METADATA, receiveFileExtractedMetadata} from "./file";

export const userActions = {
	login,
	logout
};

export async function loginHelper(username, password) {
	let url = `${config.hostname}/login`;
	let data = {"name": username, "password": password};
	const tokenRequest =  fetch(url, {
		method:"POST",
		mode:"cors",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	const tokens = await tokenRequest.json();

	return tokens;
}

export const LOGIN_ERROR = "LOGIN_ERROR";
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

export function login(username, password) {
	return async (dispatch) => {
		const json = await loginHelper(username, password);
		if (json["token"] !== undefined) {
			localStorage.setItem("Authorization", `bearer ${json["token"]}`);
			return dispatch({
				type: SET_USER,
				Authorization: `bearer ${json["token"]}`,
			});
		} else {
			return dispatch({
				type: LOGIN_ERROR
			});
		}
	};
}

export function logout() {
	return (dispatch) => {
		localStorage.removeItem("Authorization");
		return dispatch({
			type: LOGOUT
		});
	};
}
