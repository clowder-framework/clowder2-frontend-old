import config from "../app.config";

export const userActions = {
	login,
	logout
};

export async function loginHelper(username, password) {
	const url = `${config.hostname}/login`;
	const data = {"name": username, "password": password};
	const tokenRequest = await fetch(url, {
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
		localStorage.removeItem("Authorization");

		if (json["token"] !== undefined && json["token"] !== "none") {
			localStorage.setItem("Authorization", `bearer ${json["token"]}`);
			return dispatch({
				type: SET_USER,
				Authorization: `bearer ${json["token"]}`,
			});
		} else {
			return dispatch({
				type: LOGIN_ERROR,
				Authorization: "",
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
