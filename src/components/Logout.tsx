import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logout as logoutAction} from "../actions/user";
import {useNavigate} from "react-router-dom";

export const Logout = (): JSX.Element => {
	const dispatch = useDispatch();
	const logout = () => dispatch(logoutAction());
	const history = useNavigate();
	// component did mount
	useEffect(() => { logout(); 	history("/login");}, []);

	return (
		<div/>
	)
}
