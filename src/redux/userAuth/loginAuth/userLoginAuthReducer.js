
import {createReducer} from "../../utils";
import {
	LOGIN_USER_REQUEST,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAILURE
} from "./userLoginAuthTypes";

const initialState = {
	userLogin: {
		username: '',
		isAuthenticating: false,
		authenticated: false,
		error: null
	}
}

const loginReducer = createReducer(initialState, {

	[LOGIN_USER_REQUEST]: (prevState) =>
		Object.assign({}, prevState, {
			...prevState,
			userLogin: {
				...prevState.userLogin,
				isAuthenticating: true,
				authenticated: false,
				error: null
			}
		}),

	[LOGIN_USER_SUCCESS]: (prevState, payload) =>
		Object.assign({}, prevState, {
			...prevState,
			userLogin: {
				...prevState.userLogin,
				username: payload,
				isAuthenticating: false,
				authenticated: true,
				error: null
			}
		}),

	[LOGIN_USER_FAILURE]: (prevState, payload) =>
		Object.assign({}, prevState, {
			...prevState,
			userLogin: {
				...prevState.userLogin,
				isAuthenticating: false,
				authenticated: false,
				error: payload
			}
		})
});

export default loginReducer;