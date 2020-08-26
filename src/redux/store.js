
import {applyMiddleware, combineReducers, createStore} from "redux";
import loginReducer from "./userAuth/loginAuth/userLoginAuthReducer";
import signUpReducer from "./userAuth/signupAuth/userSignupAuthReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	login: loginReducer,
	signup: signUpReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;