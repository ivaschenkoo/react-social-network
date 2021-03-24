import {profileAPI} from "../api/api";

const SETPROFILE = 'SET-PROFILE';
const SETSTATUS = 'SET-STATUS';
const SETFETCHING = 'SET FETCHING';

let initialState = {
    profile: {
        userId: 1,
        aboutMe: "Nothing",
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "Nothing",
        fullName: "Test Test",
        photos: {
            small: null,
            large: null
        },
    },
    profileStatus: 'test',
    isFetching: true,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPROFILE:
            return {
                ...state,
                profile: {...action.data},
            }
        case SETSTATUS:
            return {
                ...state,
                profileStatus: action.status,
            }
        case SETFETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state;
    }
}

export const setProfile = (data) => ({
    type: SETPROFILE,
    data,
})
export const setStatus = (status) => ({
    type: SETSTATUS,
    status,
})
export const fetchingToggle = (isFetching) => ({
    type: SETFETCHING,
    isFetching,
})


export const getUserProfile = (userId) => (dispatch) => {
    dispatch(fetchingToggle(true));
    profileAPI.getUserInfo(userId).then(data => {
        dispatch(setProfile(data));
    })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId).then(data => {
        dispatch(setStatus(data));
        dispatch(fetchingToggle(false));
    })
}
export const changeUserStatus = (status) => (dispatch) => {
    profileAPI.changeUserStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}


export default profileReducer