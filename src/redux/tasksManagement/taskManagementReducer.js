
import {
	USER_ADD_NEW_TASK_REQUEST,
	USER_ADD_NEW_TASK_SUCCESS,
	USER_ADD_NEW_TASK_FAILURE
} from "./userAddTask/userAddTaskTypes";
import {createReducer} from "../utils";

const initialState = {
	tasks: [],
	taskAdd: {
		isAdding: false,
		done: false,
		error: false
	}
}

const taskManagementReducer = createReducer(initialState, {
	[USER_ADD_NEW_TASK_REQUEST]: (prevState) =>
		Object.assign({}, prevState, {
			...prevState,
			taskAdd: {
				...prevState.taskAdd,
				isAdding: true,
				done: false,
				error: false
			}
		}),

	[USER_ADD_NEW_TASK_SUCCESS]: (prevState) =>
		Object.assign({}, prevState, {
			...prevState,
			taskAdd: {
				...prevState.taskAdd,
				isAdding: false,
				done: true,
				error: false
			}
		}),

	[USER_ADD_NEW_TASK_FAILURE]: (prevState) =>
		Object.assign({}, prevState, {
			...prevState,
			taskAdd: {
				...prevState.taskAdd,
				isAdding: false,
				done: false,
				error: true
			}
		})
});

export default taskManagementReducer;