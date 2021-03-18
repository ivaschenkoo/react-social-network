import {authAPI} from "../api/api";

const SET_USER = 'SET-USER'
const SET_ERROR = 'SET-ERROR'
const LOGOUT = 'LOGOUT'

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false,
    errorCode: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                data: {...action.data},
                isAuth: true,
                errorCode: null
            }
        case SET_ERROR:
            return {
                ...state,
                errorCode: action.errorCode
            }
        case LOGOUT:
            return {
                data: {
                    id: null,
                    login: null,
                    email: null
                },
                isAuth: false,
                errorCode: false
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
export const authError = (errorCode) => ({
    type: SET_ERROR,
    errorCode
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
        } else if (data.resultCode === 1) {
            dispatch(authError(1))
        } else if (data.resultCode === 10) {
            dispatch(authError(10))
        } else {
            dispatch(authError(11))
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

export default authReducer;