
import {applyMiddleware, combineReducers, createStore} from "redux";
import loginReducer from "./userAuth/loginAuth/userLoginAuthReducer";
import signUpReducer from "./userAuth/signupAuth/userSignupAuthReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import taskManagementReducer from "./tasksManagement/taskManagementReducer";

const rootReducer = combineReducers({
	login: loginReducer,
	signup: signUpReducer,
	taskManagement: taskManagementReducer
})

let store = null;

// Apply the 'composeWithDevTools' only in development environment and not
// production environment.

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
	store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
	store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;