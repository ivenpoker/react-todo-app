
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Navbar from "./sub-comps/Navbar";
import $ from "jquery";

class Home extends Component {

	componentDidMount() {
		$(function () {
			$('[data-toggle="popover"]').popover()
		})
	}

	render() {
		const {user} = this.props;
		return (
			<Fragment>
				<Navbar user={user}/>
				<div className="jumbotron jumbotron-fluid text-white-50" style={{backgroundColor: "#000000"}}>
					<div className="container">
						<h4>Hi, {user.username} </h4>
					</div>
				</div>
				<div className="container">

				</div>
			</Fragment>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object.isRequired
};

export default Home;