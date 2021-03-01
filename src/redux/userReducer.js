const FRIENDTOGGLE = 'FRIEND-TOGGLE';
const SETUSERS = 'SET-USERS';

let inititalState = {
    users: []
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
                users: [...state.users, ...action.users]
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

export default userReducer;


// {
//     id: 1,
//         friend: false,
//     photoUrl: '',
//     firstName: 'Vladislav',
//     lastName: 'Ivaschenko',
//     about: 'I am looking for a job',
//     location: {city: 'Kyiv', country: 'Ukraine'}
// },
// {
//     id: 2,
//         friend: true,
//     photoUrl: '',
//     firstName: 'Albert',
//     lastName: 'Abrams',
//     about: 'Life is good',
//     location: {city: 'Warsaw', country: 'Poland'}
// },
// {
//     id: 3,
//         friend: false,
//     photoUrl: '',
//     firstName: 'Anatoliy',
//     lastName: 'Deltovert',
//     about: 'Learn English',
//     location: {city: 'Moscow', country: 'Russia'}
// },
// {
//     id: 4,
//         friend: false,
//     photoUrl: '',
//     firstName: 'Alexandr',
//     lastName: 'Inguszh',
//     about: '...',
//     location: {city: 'Minsk', country: 'Belarus'}
// },
// {
//     id: 5,
//         friend: true,
//     photoUrl: '',
//     firstName: 'Elizabeth',
//     lastName: 'Pustovit',
//     about: 'I am studying',
//     location: {city: 'Zhitomir', country: 'Ukraine'}
// },