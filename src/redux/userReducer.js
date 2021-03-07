const FRIENDTOGGLE = 'FRIEND-TOGGLE';
const SETUSERS = 'SET-USERS';
const SETUSERSCOUNT = 'SET-USERS-COUNT';
const SETCURRENTPAGE = 'SET-CURRENT-PAGE';
const SETFETCHING = 'SET-FETCHING';

let inititalState = {
    users: [],
    allUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

const userReducer = (state = inititalState, action) => {
    switch (action.type) {
        case FRIENDTOGGLE:
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
        case SETUSERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SETUSERSCOUNT:
            return {
                ...state,
                allUsersCount: action.allUsersCount,
            }
        case SETCURRENTPAGE:
            return {
                ...state,
                currentPage: action.currentPage,
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

export const followToggle = (userId) => {
    return {
        type: FRIENDTOGGLE,
        id: userId,
    }
}

export const setUsers = (users) => {
    return {
        type: SETUSERS,
        users: users,
    }
}

export const updateAllUsersCount = (count) => {
    return {
        type: SETUSERSCOUNT,
        allUsersCount: count,
    }
}

export const setPage = (page) => {
    return {
        type: SETCURRENTPAGE,
        currentPage: page,
    }
}

export const fetchingToggle = (isFetching) => {
    return {
        type: SETFETCHING,
        isFetching,
    }
}

export default userReducer;
