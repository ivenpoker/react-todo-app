import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {autoLoginUser} from "./redux";
import Home from "./components/home/userDashboard/Home";
import MainLoginSignUpAuth from "./components/loginAuth/MainLoginSignUpAuth";
import RootPage from "./components/root/RootPage";


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
				{/*<RootPage/>*/}
				{
					this.props.userLogin.authenticated ? (
						<Home user={this.props.userLogin.user}/>
					) : (
						<MainLoginSignUpAuth/>
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
