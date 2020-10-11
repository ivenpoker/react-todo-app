
import React, {Component, Fragment} from "react";
import $ from "jquery";
import {connect} from "react-redux";
import "font-awesome/css/font-awesome.css";
import {createNewTask} from "../../../../redux";
import {v4} from "uuid";

const __IMG_CONFIG = {
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center center",
	objectFit: "cover"
}

const AddTaskModalContainer = (ChildComponent) => {
	class AddTaskModal extends Component {

		constructor(props) {
			super(props);
			this.state = {
				backgroundTaskImage: {
					showInput: false,
					imageURL: ''
				},
				newTask: {
					taskName: '',
					taskOwner: '',
					taskDescription: '',
				},
				errorMessage: ''
			};
		}

		__handleSetTaskBackgroundImage = (evt) => {
			this.setState((prevState) => ({
				...prevState,
				backgroundTaskImage: {
					...prevState.backgroundTaskImage,
					showInput: true
				}
			}));
		}

		__handleImageURLChange = (evt) => {
			const newImgURL = evt.target.value;
			this.setState((prevState) => ({
				...prevState,
				backgroundTaskImage: {
					...prevState.backgroundTaskImage,
					imageURL: newImgURL
				}
			}))
		}

		__handleImageDelete = (evt) => {
			if (window.confirm("Sure to remove image ?")) {
				this.setState((prevState) => ({
					...prevState,
					backgroundTaskImage: {
						...prevState.backgroundTaskImage,
						imageURL: ''
					}
				}))
			}
		}

		__handleUploadImageURL = (evt) => {
			this.setState((prevState) => ({
				...prevState,
				backgroundTaskImage: {
					...prevState.backgroundTaskImage,
					showInput: false
				}
			}))
		}

		__handleNewTaskInputChange = (evt) => {
			const inputValue = evt.target.value;
			const inputName = evt.target.name;

			this.setState((prevState) => ({
				...prevState,
				newTask: {
					...prevState.newTask,
					[inputName]: inputValue
				}
			}))
		}

		__showAddTaskModal = () => {
			$(function () {
				$("div#addTaskModal").modal("show");
			})
		}

		__handleAddTaskSubmit = (evt) => {
			evt.preventDefault(); 		// prevent page default action of refreshing

			const {taskName, taskOwner, taskDescription} = this.state.newTask;
			const imageURL = this.state.backgroundTaskImage.imageURL;

			const taskOwners = taskOwner.trim().split(" ").map((owner) => owner.trim());
			let errorMessage = "";
			if (!taskName.trim()) {
				errorMessage = "Please provide task name";
			} else if (taskOwners.length === 0 || taskOwners.some((owner) => owner.length === 0)) {
				errorMessage = "Please provide task owners (names separated by space)";
			} else if (!taskDescription.trim()) {
				errorMessage = "Please provide task description";
			}

			// if any error message alert the user
			if (errorMessage) {
				this.setState((prevState) => ({
					...prevState,
					errorMessage: errorMessage
				}));
			} else {

				const userId = this.props.user.id;

				this.setState((prevState) => ({
					...prevState,
					errorMessage: ''
				}), () => {

					this.props.createNewTask(userId, taskName, taskDescription, v4(),
						"active", taskOwners, imageURL);

				})
			}
		}


		componentDidMount() {
			console.log("MODAL-PROPS:", this.props);
			$(function () {
				$("div#addTaskModal").modal({
					keyboard: false,
					backdrop: "static",
					show: false
				});

				$("div#task-bg-img").css({
					...__IMG_CONFIG
				});
			});
		}

		render() {
			return (
				<Fragment>
					<form onSubmit={this.__handleAddTaskSubmit}>
						<div className="modal fade" id="addTaskModal" tabIndex="-1" role="dialog"
							 aria-labelledby="addTaskModalLabel" aria-hidden="true">
							<div className="modal-dialog modal-lg" role="document">
								<div className="modal-content">
									<div className="modal-header bg-dark text-white br-0 pt-2 pb-2">
										<h5 className="modal-title" id="addTaskModalLabel">Create New Task</h5>
										<button type="button" className="close text-white" data-dismiss="modal"
												aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div className="modal-body">
										{
											this.props.taskAdd.isAdding ? (
												<div className="text-center">
													<div className={""}>
														<div className="sk-wave sk-center p-2 mt-2">
															<div className="sk-wave-rect"/>
															<div className="sk-wave-rect"/>
															<div className="sk-wave-rect"/>
															<div className="sk-wave-rect"/>
															<div className="sk-wave-rect"/>
														</div>
													</div>
													<br/>
													<span>Creating your task ...</span>
												</div>
											) : null
										}
										<div className="row">
											<div className="col-sm-4">
												{
													this.state.backgroundTaskImage.showInput ? (
														<Fragment>
															<div className="alert alert-warning small text-center mb-2">
																Any misuse of <span className="font-weight-bold">image
															(source URL)</span> will be your sole
																responsibility.
															</div>
															<textarea
																className="no-border-outline form-control form-control-sm mb-2 shadow"
																placeholder="Past the URL of the picture here ..."
																style={{width: "100%", height: "10rem"}}
																value={this.state.backgroundTaskImage.imageURL}
																onChange={this.__handleImageURLChange}/>

															<button
																className="btn btn-outline-dark btn-sm btn-block one-edge-shadow"
																onClick={this.__handleUploadImageURL}>
																upload image url
															</button>
														</Fragment>
													) : (
														<Fragment>
															<div
																className="card card-block d-flex bg-secondary text-white elem-zoom-in text-center clickable one-edge-shadow"
																id="task-bg-img"
																style={{
																	height: "10em",
																	backgroundImage: `url(${this.state.backgroundTaskImage.imageURL})`
																}}
																onClick={this.__handleSetTaskBackgroundImage}
															>
																<div
																	className="card-body align-items-center d-flex justify-content-center">
																	{
																		!this.state.backgroundTaskImage.imageURL ? (
																			<div className="container">
																			<span
																				className="badge badge-dark p-2 clickable"
																			>
																				{
																					!this.state.backgroundTaskImage.imageURL ? (
																						<span>No task image</span>
																					) : null
																				}
																		</span>
																			</div>
																		) : null
																	}
																</div>
															</div>
															{
																!this.state.backgroundTaskImage.imageURL ? (
																	<button
																		className="btn btn-dark btn-sm btn-block text-center mt-2 one-edge-shadow"
																		onClick={this.__handleSetTaskBackgroundImage}>
																		Add New Task Image
																	</button>
																) : (
																	<Fragment>
																		<div className="row">
																			<div className="col-sm-12">
																				<button
																					className="btn btn-dark btn-sm btn-block text-center mt-2 one-edge-shadow"
																					onClick={this.__handleSetTaskBackgroundImage}>
																					Update Image
																				</button>
																			</div>
																			<div className="col-sm-12">
																				<button
																					className="btn btn-danger btn-sm btn-block text-center mt-1 one-edge-shadow"
																					onClick={this.__handleImageDelete}>
																					Delete Image
																				</button>
																			</div>
																		</div>
																	</Fragment>
																)
															}

														</Fragment>
													)
												}
											</div>
											<div className="col-sm-8">
												{
													this.state.errorMessage ? (
														<div className="alert alert-warning text-center shadow elem-zoom-in">
															<i className="fa fa-warning mr-2"/>
															<span className="font-weight-light small">
																{this.state.errorMessage}
															</span>
														</div>
													) : null
												}
												<div className="form-group">
													<input
														className="no-border-outline form-control form-control-sm shadow p-3"
														placeholder="Enter task name"
														value={this.state.newTask.taskName}
														name="taskName"
														required="required"
														onChange={this.__handleNewTaskInputChange}/>

													<input
														className="no-border-outline form-control form-control-sm mt-2 shadow p-3"
														value={this.state.newTask.taskOwner}
														placeholder="Who owns this task?"
														name="taskOwner"
														onChange={this.__handleNewTaskInputChange}
														required="required"
													/>

													<textarea
														className="no-border-outline form-control form-control-sm mt-2 shadow pl-3 pl-3 pt-2"
														placeholder="Add task description"
														value={this.state.newTask.taskDescription}
														name="taskDescription"
														required="required"
														onChange={this.__handleNewTaskInputChange}
														style={{width: "100%", height: "155px"}}/>
												</div>
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button type="submit" className="btn btn-outline-dark btn-sm one-edge-shadow">
											<span className="fa fa-plus mr-2"/>
											Add Task
										</button>
										<button type="button" className="btn btn-danger btn-sm one-edge-shadow"
												data-dismiss="modal">
											Cancel
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
					<ChildComponent {...this.props} showAddTaskModal={this.__showAddTaskModal}/>
				</Fragment>
			);
		}
	}
	const mapStateToProps = (state) => ({
		taskAdd: state.taskManagement.taskAdd
	});

	const mapDispatchToProps = (dispatch) => ({
		createNewTask: (userId, taskName, taskDescription, taskId, taskStatus, owners, imgURL) =>
			dispatch(createNewTask(userId, taskName, taskDescription, taskId, taskStatus, owners, imgURL))
	});

	return connect(mapStateToProps, mapDispatchToProps)(AddTaskModal)
}

export default AddTaskModalContainer;