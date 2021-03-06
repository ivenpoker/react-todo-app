
import {
	USER_ADD_NEW_TASK_REQUEST,
	USER_ADD_NEW_TASK_SUCCESS,
	USER_ADD_NEW_TASK_FAILURE
} from "./userAddTaskTypes";

// ################## ACTION HELPERS ###################

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

// ################## ACTION CREATORS ##################

export const createNewTask = (userId, taskName, taskDescription, taskId, taskStatus) => {
	return (dispatch) => {

		dispatch(USER_ADD_NEW_TASK_REQUEST);

		const newTaskObj = {
			"id": taskId,
			"name": taskName,
			"description": taskDescription,
			"status": taskStatus
		}
		const mainUserDB = window.localStorage.getItem("users_db");
		if (!mainUserDB) {
			// something really bad is going on here ...
			// we've just got to log user out

			// clear user 'session' info
			window.localStorage.removeItem("prev_username");

			// trigger page refresh, will cause user to be logged out.
			window.location = "/";

			dispatch(USER_ADD_NEW_TASK_FAILURE);
		} else {
			let mainUserDBObj = JSON.parse(mainUserDB);

			// if there is no user with that ID, we've got probably
			// a security breach, we sign user out ASAP
			if (!mainUserDBObj.coreData.some((user) => user.id === userId)) {

				// clear user 'session' info
				window.localStorage.removeItem("prev_username");

				// trigger page refresh, will cause user to be logged out.
				window.location = "";

				dispatch(USER_ADD_NEW_TASK_FAILURE);
			}

			// Find user and add new task to his her list of tasks
			mainUserDBObj = mainUserDBObj.coreData.map((user) => {
				if (user.id === userId) {
					user.todos = [...user.todos, newTaskObj];
				}
				return user;
			});

			// Save data to reflect new state
			window.localStorage.setItem("users_db", JSON.stringify(mainUserDBObj));

			dispatch(USER_ADD_NEW_TASK_SUCCESS);
		}
	}
}