
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

		const mainUsersDB = window.localStorage.getItem("users_db");
		if (mainUsersDB) {
			const mainUsersDBObj = JSON.parse(mainUsersDB);

			// Check to see if there is a user with that name already
			if (mainUsersDBObj.coreData.length > 0 &&
				mainUsersDBObj.coreData.some((user) => user.username === username)) {

				dispatch(failureHelper(USER_SIGNUP_FAILURE, "username already taken"));
			} else {
				const newUser = {
					username: username,
					password: password,
					todos: []
				};

				// Add new user to 'database'
				mainUsersDBObj.coreData = [...mainUsersDBObj.coreData, newUser];
				window.localStorage.setItem("users_db", JSON.stringify(mainUsersDBObj));

				dispatch(successHelper(USER_SIGNUP_SUCCESS));
			}
		} else {
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
		}
	}
}


export default signUserUp;