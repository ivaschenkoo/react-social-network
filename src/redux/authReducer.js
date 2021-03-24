import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER = 'SET-USER'
const LOGOUT = 'LOGOUT'

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                data: {...action.data},
                isAuth: true,
            }
        case LOGOUT:
            return {
                data: {
                    id: null,
                    login: null,
                    email: null
                },
                isAuth: false,
            }
        default:
            return state;
    }
}

export const setAuthUser = (data) => ({
    type: SET_USER,
    data,
    isAuth: true,
})
export const logout = () => ({
    type: LOGOUT,
})

export const getAuthUser = () => (dispatch) => {
    authAPI.getLoginStatus().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUser(data.data))
        }
    })
}
export const postUserData = (email, password, rememberMe = false) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUser())
        } else {
            let message = data.messages.length > 0 ? data.messages[0] : "Some Error";
            dispatch(stopSubmit('login', {_error: message}));
        }
    })
}
export const logoutUser = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(logout())
        }
    })
}

export default authReducer