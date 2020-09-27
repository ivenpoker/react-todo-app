
import React, {Component, Fragment} from "react";
import $ from "jquery";

const __IMG_CONFIG = {
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center center",
	objectFit: "cover"
}


const AddTaskModalContainer = (ChildComponent) =>
	class AddTaskModal extends Component {

		constructor(props) {
			super(props);
			this.state = {
				backgroundTaskImage: {
					showInput: false,
					imageURL: ''
				}
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

				$("div#task-bg-img").css({
					...__IMG_CONFIG
				});
			});
		}

		render() {
			return (
				<Fragment>
					<div className="modal fade" id="addTaskModal" tabIndex="-1" role="dialog"
						 aria-labelledby="addTaskModalLabel" aria-hidden="true">
						<div className="modal-dialog modal-lg" role="document">
							<div className="modal-content">
								<div className="modal-header pt-2 pb-2">
									<h5 className="modal-title" id="addTaskModalLabel">Create New Task</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">
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
														<textarea className="no-border-outline form-control form-control-sm mb-2"
																  placeholder="Past the URL of the picture here ..."
																  style={{width: "100%", height:"10rem"}}
																  value={this.state.backgroundTaskImage.imageURL}
																  onChange={this.__handleImageURLChange}/>

														<button className="btn btn-outline-dark btn-sm btn-block"
																onClick={this.__handleUploadImageURL}>
															upload image url
														</button>
													</Fragment>
												) : (
													<Fragment>
														<div className="card card-block d-flex bg-secondary text-white elem-zoom-in text-center clickable" id="task-bg-img"
															 style={{height: "10em", backgroundImage: `url(${this.state.backgroundTaskImage.imageURL})`}}
															 onClick={this.__handleSetTaskBackgroundImage}
														>
															<div className="card-body align-items-center d-flex justify-content-center">
																{
																	!this.state.backgroundTaskImage.imageURL ? (
																		<div className="container">
																		<span className="badge badge-dark p-2 clickable"
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
																<button className="btn btn-dark btn-sm btn-block text-center mt-2"
																		onClick={this.__handleSetTaskBackgroundImage}>
																	Add New Task Image
																</button>
															) : (
																<Fragment>
																	<div className="row">
																		<div className="col-sm-12">
																			<button className="btn btn-dark btn-sm btn-block text-center mt-2"
																					onClick={this.__handleSetTaskBackgroundImage}>
																				Update Image
																			</button>
																		</div>
																		<div className="col-sm-12">
																			<button className="btn btn-danger btn-sm btn-block text-center mt-1"
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
											<form className="form-group">
												<input className="no-border-outline form-control form-control-sm" placeholder="Enter task name"/>
												<input className="no-border-outline form-control form-control-sm mt-2" placeholder="Who owns this task?"/>
												<textarea className="no-border-outline form-control form-control-sm mt-2" placeholder="Add task description"
														  style={{width: "100%", height: "8.5em"}}/>
											</form>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-dark btn-sm">Add New Task</button>
									<button type="button" className="btn btn-danger btn-sm" data-dismiss="modal">Cancel</button>
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