
import {createStore} from "redux";
import loginReducer from "./userAuth/userAuthReducer"

const store = createStore(loginReducer);

export default store;