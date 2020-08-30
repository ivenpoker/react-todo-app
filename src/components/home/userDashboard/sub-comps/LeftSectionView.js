
import React, {Component, Fragment} from "react"
import PropTypes from "prop-types";

class LeftSectionView extends Component {

	handleAddTaskButtonClick = (evt) => {
		this.props.showAddTaskModal();
	}

	render() {
		return (
			<Fragment>
				<div className="mb-3">
					<div className="row">
						<div className="col-sm-6 mb-2">
							<button className="btn btn-light btn-sm btn-block p-2"
								onClick={this.handleAddTaskButtonClick}>
								<img src="https://img.icons8.com/ios-glyphs/2x/add-property.png" width={20} height={20}/>
								<span className="ml-2">Add new task</span>
							</button>
						</div>
						<div className="col-sm-6">
							<button className="btn btn-light btn-sm btn-block p-2">
								<img src="https://img.icons8.com/material/2x/edit.png" width={20} height={20}/>
								<span className="ml-2">Edit tasks</span>
							</button>
						</div>
					</div>
				</div>
				<div className="list-group">
					<a href="#" className="list-group-item list-group-item-action flex-column align-items-start text-white"
					   style={{backgroundColor: "#000000"}}>
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">List group item heading</h5>
							<small>3 days ago</small>
						</div>
						<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
							risus varius blandit.</p>
						<small>Donec id elit non mi porta.</small>
					</a>
					<a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">List group item heading</h5>
							<small className="text-muted">3 days ago</small>
						</div>
						<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
							risus varius blandit.</p>
						<small className="text-muted">Donec id elit non mi porta.</small>
					</a>
					<a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
						<div className="d-flex w-100 justify-content-between">
							<h5 className="mb-1">List group item heading</h5>
							<small className="text-muted">3 days ago</small>
						</div>
						<p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
							risus varius blandit.</p>
						<small className="text-muted">Donec id elit non mi porta.</small>
					</a>
				</div>
			</Fragment>
		);
	}
}

LeftSectionView.propTypes = {
	showAddTaskModal: PropTypes.func.isRequired
}

export default LeftSectionView;