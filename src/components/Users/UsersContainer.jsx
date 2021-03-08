import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {getUsers, friendToggle, changePage} from "../../redux/userReducer";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, 10)
    }

    render() {
        return <>
            <Users users={this.props.users}
                   currentPage={this.props.currentPage}
                   countOfPages={this.props.countOfPages}
                   isFetching={this.props.isFetching}
                   followInProgress={this.props.followInProgress}
                   friendToggle={this.props.friendToggle.bind(this)}
                   changePage={this.props.changePage.bind(this)} />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        countOfPages: Math.ceil(state.usersPage.allUsersCount / 10),
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress,
    }
}

export default connect(mapStateToProps, {getUsers, friendToggle, changePage})(UsersContainer);

