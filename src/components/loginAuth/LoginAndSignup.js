import React, {Component, Fragment} from 'react';
import appIcon from "../../images/icons/icons8-list-64.png";
import personIcon from "../../images/icons/icons8-person-100.png"
import {Button, Modal} from "react-bootstrap";
import $ from "jquery";

// This is a HOC for Signing up for new 'account' for the application.
const SignupModalContainer = (ChildComponent) =>
	class SignupModalContainer extends Component {

		constructor(props) {
			super(props);
			this.state = {
				showModal: false
			}
		}

		// Function call to close modal programmatically.
		handleModalClose = () => {
			this.setState((prevState) => ({
				...prevState,
				showModal: false
			}));
		}

		// Function call to trigger modal view
		handleModalShow = () => {
			this.setState((prevState) => ({
				...prevState,
				showModal: true
			}));
		}

		// Render view for Signup
		render() {
			const {showModal} = this.state;
			return (
				<Fragment>
					<Modal show={showModal} backdrop="static" keyboard={false}
						   aria-labelledby="contained-modal-title-vcenter"
					       centered>
						<form>
							<div className="text-center mt-4 card-title text-black-50">
								<h4 className="font-weight-bold">Sign Up</h4>
							</div>
							<Modal.Body>

								<div className="mt-2">
									<div className="col-sm-12">
										<input type="text" className="form-control form-control-sm text-center shadow"
											   placeholder="username"
											   name="username"
											   style={{padding: 20}}
										/>
									</div>
									<div className="col-sm-12 mt-2">
										<input type="password" className="form-control form-control-sm text-center shadow"
											   placeholder="password"
											   name="password"
											   style={{padding: 20}}
										/>
									</div>
								</div>

							</Modal.Body>
							<hr/>
							<Fragment>
								<div className="container mb-4">
									<div className="row">
										<div className="col-sm-12">
											<Button variant="dark" className="btn-block shadow">Sign Up</Button>
										</div>
										<div className="col-sm-12 mt-2">
											<Button variant="danger" className="btn-block shadow" onClick={this.handleModalClose}>
												Cancel
											</Button>
										</div>
									</div>
								</div>
							</Fragment>
							<div className="p-3 bg-dark text-white-50">
								<div className="text-center small">
									<span>github: </span>
									<a href="https://github.com/ivenpoker" className="link text-white">ivenpoker</a>
									<span style={{borderLeft: "1px solid grey", marginLeft: 4}}> @{(new Date()).getFullYear()}</span>
								</div>
							</div>
						</form>
					</Modal>
					<ChildComponent showModal={this.handleModalShow}/>
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
				password: ''
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
	}

	componentDidMount() {

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
				<div className="">

					<div className="card border-dark shadow-lg m-auto ml-2 mr-2 bg-dark text-white mb-3" style={{maxWidth: "30rem", borderRadius: 15}}>
						<form onSubmit={this.handleFormSubmit}>
							<div className="card-header">
								<div className="text-center">
									<div className="row">
										<div className="col-sm-12">
											<img src={personIcon}
												 alt="User Profile Pic"/>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">

								<div className="row">
									<div className="col-sm-12">
										<input type="text" className="form-control form-control-sm text-center p-3 shadow"
											   placeholder="username"
											   name="username"
											   onChange={this.handleLoginInputChange}
										/>
									</div>
									<div className="col-sm-12 mt-2">
										<input type="password" className="form-control form-control-sm text-center p-3 shadow"
											   placeholder="password"
											   name="password"
											   onChange={this.handleLoginInputChange}
										/>
									</div>
								</div>

							</div>
							<div className="card-footer">
								<div className="row">
									<div className="col-sm-6 mb-2">
										<button className="btn btn-block btn-light shadow">
											Log in
										</button>
									</div>
									<div className="col-sm-6">
										<button className="btn btn-block btn-outline-light shadow"
												onClick={this.handleSignUpClick}>
											Sign up
										</button>
									</div>
								</div>
								<hr/>
								<div className="text-center">
									<a href='#' className="link text-white-50 small">Forgot password</a>
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

export default SignupModalContainer(LoginAndSignup);
