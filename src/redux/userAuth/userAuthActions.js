
import {
	LOGIN_USER_REQUEST,
	LOGIN_USER_FAILURE,
	LOGIN_USER_SUCCESS
} from "./userAuthTypes";

// ################ ACTION HELPERS ##############

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

// ############### ACTION CREATORS ##############

export const loginUser = (username, password) => {
	return (dispatch) => {
		dispatch(requestHelper(LOGIN_USER_REQUEST));

		// Use in browser local storage authentication
		const storedUsername = window.localStorage.getItem("username");
		const storedPassword = window.localStorage.getItem("password");

		if (storedUsername === username &&
			storedPassword === password) {
			dispatch(successHelper(LOGIN_USER_SUCCESS, username))
		} else {
			dispatch(failureHelper(LOGIN_USER_FAILURE));
		}

	}
}