import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {isAuthorized} from "../../utils/common";
import {useDispatch, useSelector} from "react-redux";
import {login as loginAction} from "../../actions/user";
import {RootState} from "../../types/data";

export const Login = (): JSX.Element => {
	// use history hook to redirect/navigate between routes
	const history = useNavigate();

	const dispatch = useDispatch();
	const login = () => dispatch(loginAction());
	const loginError = useSelector((state:RootState) => state.user.loginError);

	// component did mount
	useEffect(() => {
			if (isAuthorized()) {
				history("/");
			} else {
				login();
			}
		}, []
	);

	useEffect(() => {
		if (!loginError) history("/");
	}, [loginError])

	return (
		<></>
	);
};
