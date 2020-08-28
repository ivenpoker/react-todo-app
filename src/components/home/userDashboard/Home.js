
import React, {Component} from "react";

class Home extends Component {

	handleLogUserOut = () => {
		window.localStorage.removeItem("prev_username");
		window.location = "/";
	}

	render() {
		return (
			<div className="jumbotron jumbotron-fluid text-white-50" style={{backgroundColor: "#000000"}}>
				<div className="container">
					<h4>Hi, </h4>
					<div className="float-right">
						<button className="btn btn-outline-danger btn-sm" onClick={this.handleLogUserOut}>Log out</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;