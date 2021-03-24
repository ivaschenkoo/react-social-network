import {applyMiddleware, combineReducers, createStore} from 'redux';
import messageReducer from './messageReducer';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    messagesPage: messageReducer,
    usersPage: userReducer,
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;
export default store