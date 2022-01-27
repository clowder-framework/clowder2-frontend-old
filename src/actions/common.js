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
