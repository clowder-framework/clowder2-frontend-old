import React, {useState} from "react";
import {useHistory, withRouter} from "react-router-dom";
import {Avatar, Button, Divider, ImageList, ImageListItem, Paper, TextField, Typography, Link} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {isAuthorized} from "../utils/common";
import {useDispatch, useSelector} from "react-redux";
import {login as loginAction} from "../actions/user";
import {RootState} from "../types/data";

const useStyles = makeStyles(() => ({
	signinButton:{
		backgroundColor: "#f7931d",
		color:"#FFFFFF"
	},
	resetPW:{
		display:"block",
		textAlign:"right",
		margin: "0 auto 10px auto",
		color: "#212529"
	},
	signUp:{
		fontWeight: 500,
		fontSize:"15px",
		display:"block",
		margin:"10px auto 5px auto",
		color: "#212529"
	},
	textField:{
		"& .MuiFormLabel-root": {
			color: "#212529"
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#212529",
			},
			"&:hover fieldset": {
				borderColor: "#212529",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#212529",
			},
		},
	}
}));


export const File = (): JSX.Element => {

	const classes = useStyles();

	// if already login, redirect to homepage
	// use history hook to redirect/navigate between routes
	const history = useHistory();
	if (isAuthorized()) { history.push("/");}

	const dispatch = useDispatch();
	const loginAction = (username:string, password:string) => dispatch(dispatch(loginAction(username, password));
	const Authorization = useSelector((state:RootState) => state.user.Authorization);
	const loginError = useSelector((state:RootState) => state.user.loginError);

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordErrorText, setPasswordErrorText] = useState("");
	const [loginErrorText, setLoginErrorText] = useState("");
	const [error, setError] = useState(false);


	const handleKeyPressed= (event) => {
		if (event.charCode === 13) { login();}
	}

	const changeUsername = (event) => {
		setUsername(event.target.value);
		setLoginErrorText("");
	}

	const changePassword = (event) => {
		let password = event.target.value;

		if (password.length <= 6) {
			setError(true);
			setPasswordErrorText("Your password must be at least 6 characters long");
			setLoginErrorText("");
		} else {
			setError(false);
			setPasswordErrorText("");
			setLoginErrorText("");
		}

		setPassword(password);
		if (event.charCode === 13) {
			login(event);
		}
	}

	 const login = () => {
		await loginAction(username, password);
		if (loginError) {
			setLoginErrorText("Username/Password is not correct. Try again");
		}
		if (!loginError) {
			this.props.history.push("/");
		}

	}

	return (
		<div>
			<div className="center"
				 style={{display: "block", margin: "auto", width: "500px", paddingTop: "10%"}}>
				<Paper style={{padding: 40}}>
					<Avatar style={{margin: "auto"}}>
						<LockOutlinedIcon/>
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Divider/>
					<ImageList cols={1} rowHeight="auto">
						<ImageListItem>
							<p style={{color: "red"}}>{loginErrorText} </p>
						</ImageListItem>
						<ImageListItem>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								autoFocus
								id="username"
								label="Username"
								name="username"
								value={username}
								onChange={changeUsername}
								className={classes.textField}
							/>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="password"
								label="Password"
								name="password"
								type="password"
								error={error}
								helperText={passwordErrorText}
								value={password}
								onChange={changePassword}
								onKeyPress={handleKeyPressed}
								className={classes.textField}
							/>
							<Link href="" className={classes.resetPW} target="_blank">Forgot password?</Link>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								onClick={login}
								className={classes.signinButton}
							>Sign In</Button>
							<Link href="" className={classes.signUp} target="_blank">Don't have an account? Sign up.</Link>
						</ImageListItem>
					</ImageList>
				</Paper>
			</div>
		</div>
	);
};
