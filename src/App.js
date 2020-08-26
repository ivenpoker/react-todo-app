import React, {Component, Fragment} from 'react';
import LoginAndSignup from "./components/loginAuth/LoginAndSignup";
import {Provider} from "react-redux";
import store from "./redux/store";

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<LoginAndSignup/>
				</Fragment>
			</Provider>
		);
	}
}

export default App;
