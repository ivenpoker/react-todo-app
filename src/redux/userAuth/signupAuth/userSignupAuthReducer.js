
import {createReducer} from "../../utils";
import {
	USER_SIGNUP_REQUEST,
	USER_SIGNUP_SUCCESS,
	USER_SIGNUP_FAILURE
} from "./userSignupAuthTypes";

const initialState = {
	userSignup: {
		isSigningUp: false,
		done: false,
		error: null
	}
}

const signUpReducer = createReducer(initialState, {

	[USER_SIGNUP_REQUEST]: (prevState) =>
		Object.assign({}, prevState, {
			...prevState,
			userSignup: {
				...prevState.userSignup,
				isSigningUp: true,
				done: false,
				error: null
			}
		}),

	[USER_SIGNUP_SUCCESS]: (prevState) =>
		Object.assign({}, prevState, {
			...prevState,
			userSignup: {
				...prevState.userSignup,
				isSigningUp: false,
				done: true,
				error: null
			}
		}),

	[USER_SIGNUP_FAILURE]: (prevState, payload) =>
		Object.assign({}, prevState, {
			...prevState,
			userSignup: {
				...prevState.userSignup,
				isSigningUp: false,
				done: false,
				error: payload
			}
		})
});

export default signUpReducer;