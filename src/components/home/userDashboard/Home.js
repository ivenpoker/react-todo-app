
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Navbar from "./sub-comps/Navbar";
import $ from "jquery";
import LeftSectionView from "./sub-comps/LeftSectionView";
import RightSectionView from "./sub-comps/RightSectionView";
import AddTaskModalContainer from "./ModalsHOC/AddTaskModalHoc";

class Home extends Component {


	componentDidMount() {
		const {user} = this.props;
		if (user) {
			console.log("user:", user);
		}
		$(function () {
			$('[data-toggle="popover"]').popover()
		})
	}

	render() {
		const {user} = this.props;
		return (
			<Fragment>
				<Navbar user={user}/>
				<div className="jumbotron jumbotron-fluid text-white-50" style={{backgroundColor: "rgb(0, 0, 0, 0.5)"}}>
					<div className="container">
						<div className="row">
							<div className="col-2"/>
							<div className="col-8">
								<input type="text" className="form-control p-4 font-weight-bold text-center shadow"
									placeholder="Search tasks, descriptions, names, dates etc ..." style={{fontSize: "+5"}}/>
							</div>
							<div className="col-2"/>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-4 mb-2">
							<LeftSectionView showAddTaskModal={this.props.showAddTaskModal}/>
						</div>
						<div className="col-sm-8">
							<RightSectionView user={user}/>
						</div>
					</div>
					<div className="feedBackButton">
						<button className="btn text-white btn-sm"
								style={{backgroundColor: "#000000"}}>
							Report a problem
						</button>
					</div>
				</div>
			</Fragment>
		);
	}
}

Home.propTypes = {
	user: PropTypes.object.isRequired
};

// Add functionality to show 'add task' modal to the home component
let WrappedHome = AddTaskModalContainer(Home);

export default WrappedHome;