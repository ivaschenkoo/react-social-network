import React, {useEffect} from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {getUsers, friendToggle, changePage} from "../../redux/userReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, 10)
    }, [])

    return <Users users={props.users}
                  currentPage={props.currentPage}
                  countOfPages={props.countOfPages}
                  isFetching={props.isFetching}
                  followInProgress={props.followInProgress}
                  friendToggle={props.friendToggle}
                  changePage={props.changePage}/>
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    countOfPages: Math.ceil(state.usersPage.allUsersCount / 10),
    isFetching: state.usersPage.isFetching,
    followInProgress: state.usersPage.followInProgress,
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {getUsers, friendToggle, changePage})
)(UsersContainer)

