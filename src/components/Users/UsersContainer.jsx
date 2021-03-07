import React from 'react';
import * as axios from "axios";
import Users from "./Users";
import {connect} from "react-redux";
import {followToggle, setPage, fetchingToggle, setUsers, updateAllUsersCount} from "../../redux/userReducer";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.changeUsers()
    }

    changeUsers(currentPage=this.props.currentPage, usersCount=10) {
        this.props.fetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}&page=${currentPage}`)
            .then(response => {
                this.props.fetchingToggle(false)
                this.props.setUsers(response.data.items);
                this.props.updateAllUsersCount(response.data['totalCount']);
            })
    }

    changePage(page) {
        this.props.setPage(page)
        this.changeUsers(page)
    }
    render() {
        return <>
            <Users users={this.props.users}
                      followToggle={this.props.followToggle}
                      countOfPages={this.props.countOfPages}
                      currentPage={this.props.currentPage}
                      changePage={this.changePage.bind(this)}
                      isFetching={this.props.isFetching} />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        allUsersCount: state.usersPage.allUsersCount,
        currentPage: state.usersPage.currentPage,
        countOfPages: Math.ceil(state.usersPage.allUsersCount / 10),
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {followToggle, setUsers, updateAllUsersCount, setPage, fetchingToggle,})(UsersContainer);

