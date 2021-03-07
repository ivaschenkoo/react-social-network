import {combineReducers, createStore} from 'redux';
import messageReducer from './messageReducer';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";


let reducers = combineReducers({
    messagesPage: messageReducer,
    usersPage: userReducer,
    profilePage: profileReducer,
});
let store = createStore(reducers);

window.store = store;
export default store;