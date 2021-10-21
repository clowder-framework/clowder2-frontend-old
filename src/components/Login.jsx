import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {Avatar, Button, Divider, ImageList, ImageListItem, Paper, TextField, Typography, Link} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {withStyles} from "@material-ui/core/styles";
import {isAuthorized} from "../utils/common";

const styles = theme => ({
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
});



class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			passwordErrorText: "",
			loginErrorText: "",
			error: false,
		};

		this.changeUsername = this.changeUsername.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.login = this.login.bind(this);
		this.handleKeyPressed = this.handleKeyPressed.bind(this);
	}

	handleKeyPressed(event) {
		if (event.charCode === 13) {
			this.login();
		}
	}

	changeUsername(event) {
		this.setState({
			username: event.target.value,
			loginErrorText: ""
		});
	}

	changePassword(event) {
		let password = event.target.value;

		if (password.length <= 6) {
			this.setState({
				error: true,
				passwordErrorText: "Your password must be at least 6 characters long",
				loginErrorText: "",
			});
		} else {
			this.setState({
				error: false,
				passwordErrorText: "",
				loginErrorText: "",
			});
		}


		this.setState({password: password});
		if (event.charCode === 13) {
			this.login(event);
		}
	}

	async login() {
		await this.props.login(this.state.username, this.state.password);
		if (this.props.loginError) {
			this.setState({
				loginErrorText: "Username/Password is not correct. Try again"
			});
		}
		if (!this.props.loginError) {
			this.props.history.push("/");
		}

	}

	render() {

		const {classes} = this.props;

		// if already login, redirect to homepage
		if (isAuthorized()) {
			this.props.history.push("/");
			return null;
		}

		// else render login page
		else {
			return (
				<div>
					<div className="center"
						 style={{display: "block", margin: "auto", width: "500px", paddingTop: "10%"}}>
						<Paper style={{padding: 40}}>
							<Avatar style={{margin: "auto"}}>
								<LockOutlinedIcon/>
							</Avatar>
							<Divider/>
							<ImageList cols={1} rowHeight="auto">
								<ImageListItem>
									<p style={{color: "red"}}>{this.state.loginErrorText} </p>
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
										value={this.state.username}
										onChange={this.changeUsername}
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
										error={this.state.error}
										helperText={this.state.passwordErrorText}
										value={this.state.password}
										onChange={this.changePassword}
										onKeyPress={this.handleKeyPressed}
										className={classes.textField}
									/>
									<Link href="" className={classes.resetPW} target="_blank">Forgot password?</Link>
									<Button
										type="submit"
										fullWidth
										variant="contained"
										onClick={this.login}
										className={classes.signinButton}
									>Sign In</Button>
									<Link href="" className={classes.signUp} target="_blank">Don't have an account? Sign up.</Link>
								</ImageListItem>
							</ImageList>
						</Paper>
					</div>
				</div>
			);
		}
	}
}

export default withRouter(withStyles(styles)(Login));
