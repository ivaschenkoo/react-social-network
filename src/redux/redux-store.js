import {combineReducers, createStore} from 'redux';
import messageReducer from './messageReducer';
import userReducer from "./userReducer";


let reducers = combineReducers({
    messagesPage: messageReducer,
    usersPage: userReducer,
});
let store = createStore(reducers);

window.store = store;
export default store;