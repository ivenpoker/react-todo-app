
import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";

class RightSectionView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userTodos: []
		}
	}

	componentDidMount() {
		const {user} = this.props;

	}

	render() {
		const todos = this.props.user.todos;
		return (
			<Fragment>
				{
					todos && todos.length === 0 ? (
						<div className="alert alert-dark text-center font-weight-bold one-edge-shadow">
							{"No task(s) present for the moment".toUpperCase()}
							<br/>
							<span className="small">Please consider adding some <kbd>tasks</kbd></span>
						</div>
					) : null
				}
			</Fragment>
		);
	}
}

RightSectionView.propTypes = {
	user: PropTypes.object.isRequired,
}

export default RightSectionView;