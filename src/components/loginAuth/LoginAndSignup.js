import React, {Component, Fragment} from 'react';
import appIcon from "../../images/icons/icons8-list-64.png";
import personIcon from "../../images/icons/icons8-person-100.png";
import {loginUser} from "../../redux";
import signUserUp from "../../redux/userAuth/signupAuth/userSignupAuthActions";
import {connect} from "react-redux";
import $ from "jquery";

// This is a HOC for Signing up for new 'account' for the application.
const SignupModalContainer = (ChildComponent) =>
	class SignupModalContainer extends Component {

		constructor(props) {
			super(props);
			this.state = {
				showModal: false,
				userSignupData: {
					username: '',
					password: ''
				}
			}
		}

		// Function call to close modal programmatically.
		handleModalClose = () => {
			this.setState((prevState) => ({
				...prevState,
				showModal: false
			}));
		}

		// Function to handle sign up form submit
		handleSignUpFormSubmit = (evt) => {
			evt.preventDefault();

			const {username, password} = this.state.userSignupData;
			this.props.signUserUp(username, password);
		}

		// Function to handle sign up input change
		handleSignUpInputChange = (evt) => {
			const inputFieldName = evt.target.getAttribute("name");
			const inputFieldValue = evt.target.value;

			this.setState((prevState) => ({
				...prevState,
				userSignupData: {
					...prevState.userSignupData,
					[inputFieldName]: inputFieldValue
				}
			}), () => {

				// console.log("[SIGN-UP INPUT-CHANGE]:", this.state.userSignupData)

			})
		}

		// Function call to trigger modal view
		handleModalShow = () => {
			$("div#signUpModal").modal("show");
		}

		componentDidMount() {
			$(function () {
				$("div#signUpModal").modal({
					keyboard: false,
					backdrop: "static",
					show: false
				});
			})
		}

		// Render view for Signup
		render() {
			return (
				<Fragment>
					<form onSubmit={this.handleSignUpFormSubmit}>
						<div className="modal fade" id="signUpModal" tabIndex="-1" role="dialog"
							 aria-labelledby="signUpModalTitle" aria-hidden="true">
							<div className="modal-dialog" role="document">
								<div className="modal-content">
									<div className="modal-header bg-dark text-white-50" style={{borderRadius: 0}}>
										<h5 className="modal-title" id="signUpModalTitle" style={{textAlign: "center"}}>
											Create New Task Account
										</h5>
										<button type="button" className="close text-white" data-dismiss="modal"
												aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										<div className="mt-1">
											{
												this.props.userSignup.isSigningUp ? (
													<div className="mb-2">
														<div className="sk-wave sk-center p-2" style={{borderRadius: 10}}>
															<div className="sk-wave-rect"/>
															<div className="sk-wave-rect"/>
															<div className="sk-wave-rect"/>
															<div className="sk-wave-rect"/>
															<div className="sk-wave-rect"/>
														</div>
													</div>
												) : this.props.userSignup.error ? (
													<div className="alert shadow-sm alert-warning text-center font-weight-bold">
														{this.props.userSignup.error}
													</div>
												) : this.props.userSignup.done ? (
													<div className="alert shadow-sm alert-success text-center font-weight-bold">
														Account set up, just sign in now.
													</div>
												) : null
											}
											<div className="col-sm-12">
												<input type="text" className="form-control form-control-sm text-center shadow"
													   placeholder="username"
													   name="username"
													   required="required"
													   onChange={this.handleSignUpInputChange}
													   value={this.state.userSignupData.username}
													   disabled={this.props.userSignup.isSigningUp ? "disabled" : ""}
													   style={{padding: 20}}
												/>
											</div>
											<div className="col-sm-12 mt-2">
												<input type="password" className="form-control form-control-sm text-center shadow"
													   placeholder="password"
													   name="password"
													   required="required"
													   disabled={this.props.userSignup.isSigningUp ? "disabled" : ""}
													   value={this.state.userSignupData.password}
													   onChange={this.handleSignUpInputChange}
													   style={{padding: 20}}
												/>
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<div className="container mb-4">
											<div className="row">
												<div className="col-sm-12">
													<button type="submit" className="btn btn-dark btn-block shadow">Sign Up</button>
												</div>
												<div className="col-sm-12 mt-2">
													<button type="button" className="btn btn-danger btn-block shadow"
															data-dismiss="modal">Cancel</button>
												</div>
											</div>
										</div>
									</div>
									<div className="p-3 bg-dark text-white-50">
										<div className="text-center small">
											<span>github: </span>
											<a href="https://github.com/ivenpoker" className="link text-white">ivenpoker</a>
											<span style={{borderLeft: "1px solid grey", marginLeft: 4}}> @{(new Date()).getFullYear()}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
					<ChildComponent {...this.props} showModal={this.handleModalShow}/>
				</Fragment>
			);
		}
	}

class LoginAndSignup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userLoginData: {
				username: '',
				password: '',
				errorMessage: ''
			}
		}
	}

	handleLoginInputChange = (evt) => {

		// Capture where data was input in (typed in) and the data itself.
		const inputFieldName = evt.target.getAttribute("name");
		const inputFieldValue = evt.target.value;

		// Update state to reflect new changes.
		this.setState((prevState) => ({
			...prevState,
			userLoginData: {
				...prevState.userLoginData,
				[inputFieldName]: inputFieldValue
			}
		}), () => {
			// Nothing here for now.
		})

	}

	// Trigger signup modal when user clicks the sign up button
	handleSignUpClick = () => {
		this.props.showModal();
	};

	handleFormSubmit = (evt) => {
		evt.preventDefault();

		const {username, password} = this.state.userLoginData;
		if (username.length === 0 || password === 0) {
			this.setState((prevState) => ({
				...prevState,
				userLoginData: {
					...prevState.userLoginData,
					errorMessage: "Please provide username AND password."
				}
			}))
		} else {
			this.props.loginUser(username, password);
		}

	}

	componentDidMount() {
		console.log("LOGIN PROPS:", this.props)
	}

	render() {
		return (
			<Fragment>
				<div className="jumbotron jumbotron-fluid bg-dark text-white">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 text-center">
								<img className="shadow img-fluid" alt="Todo App Icon" src={appIcon}/>
								<h5 className="mt-4">
									<kbd className="p-2 shadow">TODO TASK MANAGEMENT APP</kbd>
								</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="loginAndSignupZoomIn">

					<div className="card border-dark shadow-lg m-auto ml-2 mr-2 bg-dark text-white mb-3" style={{maxWidth: "30rem", borderRadius: 15}}>
						<form method="post" onSubmit={this.handleFormSubmit}>
							<div className="card-header">
								<div className="text-center">
									<div className="row">
										<div className="col-sm-12">
											<img src={personIcon}
												 alt="User Profile Pic"/>
										</div>
									</div>
								</div>
								{
									this.props.userLogin.isAuthenticating ? (
										<div className={""}>
											<div className="sk-wave sk-center p-2 mt-2 bg-secondary" style={{borderRadius: 10}}>
												<div className="sk-wave-rect"/>
												<div className="sk-wave-rect"/>
												<div className="sk-wave-rect"/>
												<div className="sk-wave-rect"/>
												<div className="sk-wave-rect"/>
											</div>
										</div>
									) : null
								}
							</div>
							<div className="card-body">
								{
									this.state.userLoginData.errorMessage ? (
										<div className="alert alert-warning text-center font-weight-bold">
											{this.state.userLoginData.errorMessage}
										</div>
									) : this.props.userLogin.error ? (
										<div className="alert alert-danger text-center font-weight-bold">
											{this.props.userLogin.error}
										</div>
									) : null
								}
								<div className="row">
									<div className="col-sm-12">
										<input type="text" className="form-control form-control text-center p-3 shadow"
											   placeholder="username"
											   name="username"
											   required="required"
											   disabled={this.props.userLogin.isAuthenticating}
											   onChange={this.handleLoginInputChange}
										/>
									</div>
									<div className="col-sm-12 mt-2">
										<input type="password" className="form-control form-control text-center p-3 shadow"
											   placeholder="password"
											   name="password"
											   required="required"
											   disabled={this.props.userLogin.isAuthenticating}
											   onChange={this.handleLoginInputChange}
										/>
									</div>
								</div>

							</div>
							<div className="card-footer">
								<div className="row">
									<div className="col-sm-6 mb-2">
										<button type="submit" className="btn btn-block btn-light shadow">
											Log in
										</button>
									</div>
									<div className="col-sm-6">
										<button type="button" className="btn btn-block btn-outline-light shadow"
												onClick={this.handleSignUpClick}>
											Sign up
										</button>
									</div>
								</div>
								<hr/>
								<div className="text-center">
									<a href='/' className="link text-white-50 small">Forgot password</a>
								</div>
								<div className="p-1 mt-3 text-center bg-secondary shadow" style={{borderRadius: 8}}>
									<span className="small card-title">gitHub:</span>
									<a className="ml-2 link text-dark small card-title" href="https://github.com/ivenpoker"
									   rel="noopener noreferrer" target="_blank">@ivenpoker</a>
									<div className="card-subtitle mt-1">
										@{(new Date()).getFullYear()}
									</div>
								</div>
							</div>
						</form>

					</div>

				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	userLogin: state.login.userLogin,
	userSignup: state.signup.userSignup
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: (username, password) => dispatch(loginUser(username, password)),
	signUserUp: (username, password) => dispatch(signUserUp(username, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupModalContainer(LoginAndSignup));
