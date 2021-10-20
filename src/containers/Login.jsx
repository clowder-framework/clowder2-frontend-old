import {connect} from "react-redux";
import LoginComponent from "../components/Login";
import {login} from "../actions/user";

const mapStateToProps = (state) => {
	return {
		Authorization: state.user.Authorization,
		loginError: state.user.loginError
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		login: async (username, password) => {
			await dispatch(login(username, password));
		}
	};
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;
