
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Navbar from "./sub-comps/Navbar";
import $ from "jquery";
import LeftSectionView from "./sub-comps/LeftSectionView";
import RightSectionView from "./sub-comps/RightSectionView";
import AddTaskModal from "./ModalsHOC/AddTaskModal";

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userTodos: [],
		}
	}


	componentDidMount() {
		const {user} = this.props;
		if (user) {
			// console.log("user:", user);
		}
		console.log("HOME MOUNT:", this.props);
		$(function () {
			$('[data-toggle="popover"]').popover();
			$("div#main-jumb").css({
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
				objectFit: "cover",
				backgroundImage: `url('https://images.pexels.com/photos/1122639/pexels-photo-1122639.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`,
			});

			$("input#searchInput").on("mouseenter", function () {
				$(this).css({opacity: 1.0})
			}).on("mouseleave", function () {
				$(this).css({opacity: 0.5})
			}).css({opacity: 0.5})
		});

		this.setState((prevState => ({
			...prevState,
			userTodos: [...this.props.user.todos]
		})));

	}

	render() {
		const {user} = this.props;
		return (
			<Fragment>
				<Navbar user={user}/>
				<div className="jumbotron jumbotron-fluid text-white" id="main-jumb" style={{backgroundColor: "rgb(0, 0, 0, 0.5)"}}>
					<div className="container">
						<div className="row">
							<div className="col-2"/>
							<div className="col-8">
								<input type="text" id="searchInput" className="form-control p-4 font-weight-bold text-center shadow elem-zoom-out"
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
							<RightSectionView userTodos={this.state.userTodos}/>
						</div>
					</div>
					<div className="feedBackButton">
						<button className="btn text-white btn-sm one-edge-shadow"
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
let WrappedHome = AddTaskModal(Home);

const mapStateToProps = (state) => ({

})

export default WrappedHome;