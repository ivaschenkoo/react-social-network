const SET_USER = 'SET-USER'

let initialState = {
    data: {
        id: null,
        login: null,
        email: null
    }
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                data: {...action.data},
            }
        default:
            return state;
    }
}

export const setAuthUser = (data) => {
    return {
        type: SET_USER,
        data
    }
}

export default authReducer;