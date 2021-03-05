import React from 'react';
import * as axios from "axios";
import Users from "./Users";


class UsersAPI extends React.Component {

    componentDidMount() {
        this.changeUsers()
    }

    changeUsers(currentPage=this.props.currentPage, usersCount=10) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}&page=${currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.updateAllUsersCount(response.data['totalCount']);
            })
    }

    changePage(page) {
        this.props.setPage(page)
        this.changeUsers(page)
    }

    render() {
        return <Users users={this.props.users}
                      followToggle={this.props.followToggle}
                      countOfPages={this.props.countOfPages}
                      currentPage={this.props.currentPage}
                      changePage={this.changePage.bind(this)} />
    }

}

export default UsersAPI;