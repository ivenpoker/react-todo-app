
import {
	LOGIN_USER_REQUEST,
	LOGIN_USER_FAILURE,
	LOGIN_USER_SUCCESS
} from "./userLoginAuthTypes";

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

		const mainUsersDB = window.localStorage.getItem("users_db");

		// If there existed a database prior this login, we use it reference to
		// see it user exists in database.

		if (mainUsersDB) {

			const mainUserDBObj = JSON.parse(mainUsersDB);
			const user = mainUserDBObj.coreData.filter((user) => username === user.username);

			// Check if a user was found and if the password matches
			// that of the user.

			if (user.length > 0 && user[0].password === password) {
				dispatch(successHelper(LOGIN_USER_SUCCESS, user[0]))
			} else {
				dispatch(failureHelper(LOGIN_USER_FAILURE, "Incorrect username and/or password"));
			}

		} else {
			// Since NO database existed for this application in the browser, we use browswers
			// local storage to keep track of data.
			const newMainUsersSB = {
				coreData: [
					// {
					// 	username: username,
					// 	password: password,
					// 	todos: []
					// }
				]
			}
			window.localStorage.setItem("users_db", JSON.stringify(newMainUsersSB));
			dispatch(failureHelper(LOGIN_USER_FAILURE, "Incorrect username and/or password"));
		}
	}
}