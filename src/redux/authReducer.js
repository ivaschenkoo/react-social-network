import {headerAPI} from "../api/api";

const SET_USER = 'SET-USER'

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    },
    isAuth: false
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                data: {...action.data},
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setAuthUser = (data) => {
    return {
        type: SET_USER,
        data,
        isAuth: true,
    }
}

export const getAuthUser = () => {
    return (dispatch) => {
        headerAPI.getLoginStatus().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUser(data.data))
            }
        })
    }
}

export default authReducer;