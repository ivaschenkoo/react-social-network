import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {friendToggleAC, setUsersAC} from "../../redux/userReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        followToggle: (userId) => {
            dispatch(friendToggleAC(userId));
        },
        setUsers: (data) => {
            dispatch(setUsersAC(data));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;