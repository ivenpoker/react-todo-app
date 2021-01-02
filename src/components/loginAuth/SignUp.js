import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.css";

class SignUp extends Component {

    handleBackToLogin = () => {
        this.props.switchToLoginView()
    }

    render() {
        return (
            <Fragment>
                <div className="loginAndSignupZoomIn">
                    <div className="card border-white shadow-lg m-auto ml-2 mr-2 bg-white mb-3 br-8 mt-0"
                            style={{width: "18rem", borderRadius: 15}}>
                        <div className="card-header bg-dark">
                            <button className="btn btn-outline-light btn-sm"
                                    onClick={this.handleBackToLogin}>
                                <span className="fa fa-arrow-left mr-2"/>
                                back to login
                            </button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

SignUp.propTypes = {
    switchToLoginView: PropTypes.func.isRequired
}

export default SignUp