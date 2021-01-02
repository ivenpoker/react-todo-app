import React, {Component, Fragment} from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const LOGIN_VIEW = "LOGIN_VIEW";
const SIGNUP_VIEW = "SIGNUP_VIEW";

class MainLoginSignUpAuth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: LOGIN_VIEW
        }
    }

    handleViewSwitch = () => {
        const {currentView} = this.state;
        if (currentView === LOGIN_VIEW) {
            this.setState((prevState) => ({
                ...prevState,
                currentView: SIGNUP_VIEW
            }))
        } else {
            this.setState((prevState) => ({
                ...prevState,
                currentView: LOGIN_VIEW
            }))
        }
    }

    render() {
        const {currentView} = this.state;
        return (
            <Fragment>

                {
                    currentView === LOGIN_VIEW ? (
                        <Login switchToSignupView={this.handleViewSwitch}/>
                    ) : (
                        <SignUp switchToLoginView={this.handleViewSwitch}/>
                    )
                }

            </Fragment>
        );
    }

}

export default MainLoginSignUpAuth;