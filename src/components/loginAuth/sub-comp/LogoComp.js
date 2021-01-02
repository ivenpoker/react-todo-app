import React, {Component, Fragment} from "react";
import appIcon from "../../../images/icons/icons8-list-64.png";

class LogoComp extends Component {
    render() {
        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid body-bg text-white-50 p-3 mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <img className="shadow img-fluid bg-dark" alt="Todo App Icon" src={appIcon}/>
                                <h5 className="mt-4">
                                    <kbd className="p-2 shadow">
                                        <span className="fa fa-code fa-lg mr-2"/>
                                        TASK GRIND
                                    </kbd>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default LogoComp;