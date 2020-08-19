import React, {Component, Fragment} from 'react';
import appIcon from "./images/icons/icons8-list-64.png"

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		return (
			<Fragment>
				<div className="jumbotron jumbotron-fluid bg-dark text-white">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 text-center">
								<img alt="Todo App Icon" src={appIcon}/>
								<h5 className="mt-4">
									<kbd className="p-2">TODO TASK MANAGEMENT APP</kbd>
								</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="m-5">

					<div className="card m-auto ml-2 mr-2 text-dark mb-3" style={{maxWidth: "30rem", borderRadius: 15}}>
						<form>
							<div className="card-header">
								<div className="text-center">
									<div className="row">
										<div className="col-sm-12">
											<img src="https://img.icons8.com/carbon-copy/64/000000/person-male.png"
												 alt="User Profile Pic"/>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">

								<div className="row">
									<div className="col-sm-12">
										<input type="text" className="form-control form-control-sm text-center p-3" placeholder="username"/>
									</div>
									<div className="col-sm-12 mt-2">
										<input type="password" className="form-control form-control-sm text-center p-3" placeholder="password"/>
									</div>
								</div>

							</div>
							<div className="card-footer">
								<div className="row">
									<div className="col-sm-6 mb-2">
										<button className="btn btn-block btn-dark">
											Log in
										</button>
									</div>
									<div className="col-sm-6">
										<button className="btn btn-block btn-primary">
											Sign up
										</button>
									</div>
								</div>
								<hr/>
								<div className="text-center">
									<a href='#' className="link text-dark small">Forgot password</a>
								</div>
							</div>
						</form>

					</div>

				</div>
			</Fragment>
		);
	}
}

export default App;
