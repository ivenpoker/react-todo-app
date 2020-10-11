import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import __IMG_CONFIG from "../../Utils/ImageConfig";
import {v4} from "uuid";

class RightSectionView extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		const todos = this.props.userTodos;
		return (
			<Fragment>
				{
					todos && todos.length === 0 ? (
						<div className="alert alert-dark text-center font-weight-bold one-edge-shadow">
							{"No task(s) present for the moment".toUpperCase()}
							<br/>
							<span className="small">Please consider adding some <kbd>tasks</kbd></span>
						</div>
					) : (
						<div className="row">
							<div className="card-group">
								{
									this.props.userTodos.map((todo) => (
										<div className="col-sm-6 mb-4" key={v4()}>
											<div className="card shadow br-8 elem-zoom-in">
												{
													todo.imgURL ? (
														<img className="card-img-top"
															 src={todo.imgURL}
															 alt="todo image"
															 style={{height: "14em", with: "100%", ...__IMG_CONFIG}}/>
													) : null
												}
												<div className="card-body">
													<div className="card-title mt-1">
														{todo.name}
													</div>
													<div className="card-text">
														{
															todo.description ? (
																<button className="btn btn-outline-dark btn-sm">
																	view description
																</button>
															) : null
														}
													</div>
												</div>
												<div className="card-footer">
													<div className="row">
														{
															todo.owners.map((owner) => (
																<span className="badge badge-secondary small mr-1 p-1" key={v4()}>
																	{owner}
																</span>
															))
														}
													</div>
												</div>
											</div>
										</div>
									))
								}
							</div>
						</div>
					)
				}
			</Fragment>
		);
	}
}

RightSectionView.propTypes = {
	userTodos: PropTypes.array.isRequired,
}

export default RightSectionView;