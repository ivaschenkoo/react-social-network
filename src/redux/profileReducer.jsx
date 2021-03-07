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

const profileReducer = (state=initialState, action) => {
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

export const setProfile = (data) => {
    return {
        type: SETPROFILE,
        data
    }
}

export const setStatus = (status) => {
    return {
        type: SETSTATUS,
        status,
    }
}

export const fetchingToggle = (isFetching) => {
    return {
        type: SETFETCHING,
        isFetching
    }
}


export default profileReducer;