
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import $ from "jquery"

const DEFAULT_USER_PROFILE_PIC_URL =
	"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
const NOTIFICATION_ICON_LINK = "https://img.icons8.com/small/2x/appointment-reminders.png";

const imgCssStyles = {
	top: 0,
	left: 0,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	width: 30,
	height: 30,
	cursor: "pointer",
}

class Navbar extends Component {

	handleLogUserOut = () => {
		window.localStorage.removeItem("prev_username");
		window.location = "/";
	}

	componentDidMount() {
		const self = this;

		$(function () {

			// Register logout click event to log user out.
			// Tried using react 'onClick' ... but didn't work.

			$("a#logoutBtn").click(function (evt) {
				self.handleLogUserOut();
			})
		})
	}

	render() {
		const {user} = this.props;
		return (
			<Fragment>
				<div className="">
					<nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#000000"}}>
						<a className="navbar-brand font-weight-bold" href="/">
							TaskGrind
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
								aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"/>
						</button>
						<div className="collapse navbar-collapse" id="navbarText">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Task</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Organize</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">Futurize</a>
								</li>
							</ul>
							{/*<div className="mr-4">*/}
							{/*	<input className="form-control form-control-sm" placeholder="Enter search query ...."/>*/}
							{/*</div>*/}
							<div className="dropdown show">
								{/*<img src={NOTIFICATION_ICON_LINK}*/}
								{/*	 className="img-fluid mr-3"*/}
								{/*	 width={30}*/}
								{/*	 height={25}*/}
								{/*	 style={{cursor: "pointer"}}*/}
								{/*/>*/}
								<button className="btn p-0 dropdown-toggle" role="button"
										id="dropdownMenuLink" data-toggle="dropdown"
										aria-haspopup="true" aria-expanded="false">

									<img src={DEFAULT_USER_PROFILE_PIC_URL}
										 className="img-fluid shadow rounded-circle"
										 style={imgCssStyles}
									/>
									<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
										<a className="dropdown-item" type="button">Account</a>
										<a className="dropdown-item" type="button">Settings</a>
										<div className="dropdown-divider"/>
										<a className="dropdown-item font-weight-bold" type="button" id="logoutBtn"
											onClick={this.handleLogUserOut}>
											Sign out
										</a>
									</div>
								</button>
							</div>
						</div>
					</nav>
				</div>
			</Fragment>
		);
	}
}

Navbar.propTypes = {
	user: PropTypes.object.isRequired
}

export default Navbar;