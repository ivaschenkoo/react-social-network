const FRIEND_TOGGLE = 'FRIEND-TOGGLE';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_FETCHING = 'SET-FETCHING';
const FOLLOW_IN_PROGRESS = 'FOLLOW-IN-PROGRESS';

let inititalState = {
    users: [],
    allUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress: false,
};

const userReducer = (state = inititalState, action) => {
    switch (action.type) {
        case FRIEND_TOGGLE:
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.id) {
                        return {
                            ...el,
                            followed: !el.followed,
                        }
                    }
                    return el;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                allUsersCount: action.allUsersCount,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case FOLLOW_IN_PROGRESS:
            console.log('success')
            return {
                ...state,
                followInProgress: action.status,
            }
        default:
            return state;
    }
}

export const followToggle = (userId) => {
    return {
        type: FRIEND_TOGGLE,
        id: userId,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}

export const updateAllUsersCount = (count) => {
    return {
        type: SET_USERS_COUNT,
        allUsersCount: count,
    }
}

export const setPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: page,
    }
}

export const fetchingToggle = (isFetching) => {
    return {
        type: SET_FETCHING,
        isFetching,
    }
}

export const followInProgressToggle = (status) => {
    return {
        type: FOLLOW_IN_PROGRESS,
        status
    }
}

export default userReducer;
