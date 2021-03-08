import {applyMiddleware, combineReducers, createStore} from 'redux';
import messageReducer from './messageReducer';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    messagesPage: messageReducer,
    usersPage: userReducer,
    profilePage: profileReducer,
    auth: authReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;