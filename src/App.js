import React, {Component, Fragment} from 'react';
import appIcon from "./images/icons/icons8-list-64.png";
import personIcon from "./images/icons/icons8-person-100.png"
import LoginAndSignup from "./components/loginAuth/LoginAndSignup";

class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render() {
		return (
			<Fragment>
				<LoginAndSignup/>
			</Fragment>
		);
	}
}

export default App;
