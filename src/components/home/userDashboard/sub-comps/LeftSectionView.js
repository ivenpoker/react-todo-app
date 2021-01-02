import React, {Component} from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.css";

class LeftSectionView extends Component {

	handleAddTaskButtonClick = (evt) => {
		this.props.showAddTaskModal();
	}

	render() {
		return (
			<div className="sticky-top-10">
				<div className="mb-3">
					<div className="row">
						<div className="col-sm-2 mb-2">
							<button className="btn btn-outline-dark btn-sm btn-block p-2 one-edge-shadow"
								onClick={this.handleAddTaskButtonClick}>
								{/*<img src="https://img.icons8.com/ios-glyphs/2x/add-property.png" width={20} height={20}/>*/}
								<span className="fa fa-tasks fa-lg"/>
								<span className="ml-2">Add new task</span>
							</button>
						</div>
						<div className="col-sm-2">
							<button className="btn btn-outline-dark btn-sm btn-block p-2 one-edge-shadow">
								{/*<img src="https://img.icons8.com/material/2x/edit.png" width={20} height={20}/>*/}
								<span className="fa fa-edit fa-lg"/>
								<span className="ml-2">Edit tasks</span>
							</button>
						</div>
					</div>
				</div>
				<hr className="shadow"/>
			</div>
		);
	}
}

LeftSectionView.propTypes = {
	showAddTaskModal: PropTypes.func.isRequired
}

export default LeftSectionView;