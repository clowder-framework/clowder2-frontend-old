import {SET_USER, LOGIN_ERROR, LOGOUT} from "../actions/user";

const defaultState = {Authorization: null, loginError: false};

const user = (state = defaultState, action) => {
	switch(action.type) {
	case SET_USER:
		return Object.assign({}, state, {Authorization: action.Authorization, loginError: false});
	case LOGIN_ERROR:
		return Object.assign({}, state, {Authorization: null, loginError: true});
	case LOGOUT:
		return Object.assign({}, state, {Authorization: null, loginError: false});
	default:
		return state;
	}
};

export default user;
