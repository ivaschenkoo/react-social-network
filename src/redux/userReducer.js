const FRIENDTOGGLE = 'FRIEND-TOGGLE';
const SETUSERS = 'SET-USERS';
const SETUSERSCOUNT = 'SET-USERS-COUNT';
const SETCURRENTPAGE = 'SET-CURRENT-PAGE'

let inititalState = {
    users: [],
    allUsersCount: 0,
    currentPage: 1,
}

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
        default:
            return state;
    }
}

export const friendToggleAC = (userId) => {
    return {
        type: FRIENDTOGGLE,
        id: userId,
    }
}

export const setUsersAC = (users) => {
    return {
        type: SETUSERS,
        users: users,
    }
}

export const setUsersCountAC = (count) => {
    return {
        type: SETUSERSCOUNT,
        allUsersCount: count,
    }
}

export const setCurrentPageAC = (page) => {
    return {
        type: SETCURRENTPAGE,
        currentPage: page,
    }
}

export default userReducer;
