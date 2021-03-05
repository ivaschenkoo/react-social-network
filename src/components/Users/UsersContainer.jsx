import React from 'react';
import {connect} from "react-redux";
import UsersAPI from "./UsersAPI";
import {friendToggleAC, setCurrentPageAC, setUsersAC, setUsersCountAC} from "../../redux/userReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        allUsersCount: state.usersPage.allUsersCount,
        currentPage: state.usersPage.currentPage,
        countOfPages: Math.ceil(state.usersPage.allUsersCount / 10),
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        followToggle: (userId) => {
            dispatch(friendToggleAC(userId));
        },
        setUsers: (data) => {
            dispatch(setUsersAC(data));
        },
        updateAllUsersCount: (count) => {
            dispatch(setUsersCountAC(count));
        },
        setPage: (page) => {
            dispatch(setCurrentPageAC(page));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;