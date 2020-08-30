
import React, {Component, Fragment} from "react";
import $ from "jquery";

const AddTaskModalContainer = (ChildComponent) =>
	class AddTaskModal extends Component {


		showAddTaskModal = () => {
			$(function () {
				$("div#addTaskModal").modal("show");
			})
		}

		componentDidMount() {
			$(function () {
				$("div#addTaskModal").modal({
					keyboard: false,
					backdrop: "static",
					show: false
				});
			});
		}

		render() {
			return (
				<Fragment>
					<div className="modal fade" id="addTaskModal" tabIndex="-1" role="dialog"
						 aria-labelledby="addTaskModalLabel" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="addTaskModalLabel">Modal title</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
									...
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
									<button type="button" className="btn btn-dark btn-sm">Save changes</button>
								</div>
							</div>
						</div>
					</div>
					<ChildComponent {...this.props} showAddTaskModal={this.showAddTaskModal}/>
				</Fragment>
			);
		}
	}

export default AddTaskModalContainer;