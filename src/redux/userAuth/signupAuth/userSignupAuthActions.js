
import {
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAILURE
} from "./userSignupAuthTypes";

// HELPER METHODS (ACTION CREATORS)

const requestHelper = (reqType, args) => ({
	type: reqType,
	payload: args
});

const failureHelper = (reqType, args) => ({
	type: reqType,
	payload: args
});

const successHelper = (reqType, args) => ({
	type: reqType,
	payload: args
});

// HIGHER ACTION CREATORS FOR SIGNUP

const signUserUp = (username, password) => {
	return (dispatch) => {
		dispatch(requestHelper(USER_SIGNUP_REQUEST));

		// Create new user with name and password only if
		// there isn't any user with same name already

		const storedUsername = window.localStorage.getItem("username");

		if (!storedUsername) {
			window.localStorage.setItem("username", username);
			window.localStorage.setItem("password", password);

			dispatch(successHelper(USER_SIGNUP_SUCCESS));
		} else {
			dispatch(failureHelper(USER_SIGNUP_FAILURE, "username already taken"));
		}
	}
}


export default signUserUp;