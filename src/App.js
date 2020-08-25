import React, {Component, Fragment} from 'react';
import appIcon from "./images/icons/icons8-list-64.png";
import personIcon from "./images/icons/icons8-person-100.png"

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
								<img className="shadow img-fluid" alt="Todo App Icon" src={appIcon}/>
								<h5 className="mt-4">
									<kbd className="p-2 shadow">TODO TASK MANAGEMENT APP</kbd>
								</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="">

					<div className="card border-dark shadow-lg m-auto ml-2 mr-2 bg-dark text-white mb-3" style={{maxWidth: "30rem", borderRadius: 15}}>
						<form>
							<div className="card-header">
								<div className="text-center">
									<div className="row">
										<div className="col-sm-12">
											<img src={personIcon}
												 alt="User Profile Pic"/>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body">

								<div className="row">
									<div className="col-sm-12">
										<input type="text" className="form-control form-control-sm text-center p-3 shadow" placeholder="username"/>
									</div>
									<div className="col-sm-12 mt-2">
										<input type="password" className="form-control form-control-sm text-center p-3 shadow" placeholder="password"/>
									</div>
								</div>

							</div>
							<div className="card-footer">
								<div className="row">
									<div className="col-sm-6 mb-2">
										<button className="btn btn-block btn-light shadow">
											Log in
										</button>
									</div>
									<div className="col-sm-6">
										<button className="btn btn-block btn-outline-light shadow">
											Sign up
										</button>
									</div>
								</div>
								<hr/>
								<div className="text-center">
									<a href='#' className="link text-white-50 small">Forgot password</a>
								</div>
								<div className="p-1 mt-3 text-center bg-secondary shadow" style={{borderRadius: 8}}>
									<span className="small card-title">gitHub:</span>
									<a className="ml-2 link text-dark small card-title" href="https://github.com/ivenpoker"
									   rel="noopener noreferrer" target="_blank">@ivenpoker</a>
									<div className="card-subtitle mt-1">
										@{(new Date()).getFullYear()}
									</div>
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
