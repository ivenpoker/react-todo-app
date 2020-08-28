import React, {Component, Fragment} from 'react';
import LoginAndSignup from "./components/loginAuth/LoginAndSignup";
import {connect} from "react-redux";
import Home from "./components/home/userDashboard/Home";


class App extends Component {

	componentDidMount() {

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

const mapDispatchToProps = () => ({
	// Nothing for now.
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
