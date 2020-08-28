import React, {Component, Fragment} from 'react';
import LoginAndSignup from "./components/loginAuth/LoginAndSignup";
import {connect} from "react-redux";
import {autoLoginUser} from "./redux";
import Home from "./components/home/userDashboard/Home";


class App extends Component {

	componentDidMount() {
		// check to see if there was a previous user session
		const prev_username = window.localStorage.getItem("prev_username");
		if (prev_username) {
			this.props.autoLoginUser(prev_username);
		}
	}

	render() {
		return (
			<Fragment>
				{
					this.props.userLogin.authenticated ? (
						<Home/>
					) : (
						<LoginAndSignup/>
					)
				}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	userLogin: state.login.userLogin
});

const mapDispatchToProps = (dispatch) => ({
	autoLoginUser: (username) => dispatch(autoLoginUser(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
