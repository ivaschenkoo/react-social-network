import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {
    followToggle,
    setPage,
    fetchingToggle,
    setUsers,
    updateAllUsersCount,
    followInProgressToggle
} from "../../redux/userReducer";
import {userAPI} from '../../api/api'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.fetchingToggle(true)
        userAPI.getUsers(this.props.currentPage, 10).then(data => {
            this.props.fetchingToggle(false)
            this.props.setUsers(data.items);
            this.props.updateAllUsersCount(data['totalCount']);
        });
    }

    friendToggle(userId) {
        followInProgressToggle(true)
        userAPI.getFollowStatus(userId).then(status => {
            if (status) {
                userAPI.unFollow(userId).then(data => {
                    if (data.resultCode === 0) {
                        followToggle(userId)
                        followInProgressToggle(false)
                    }
                })
            } else {
                userAPI.follow(userId).then(data => {
                    if (data.resultCode === 0) {
                        followToggle(userId)
                        followInProgressToggle(false)
                    }
                })
            }
        })
    }

    changePage(page) {
        this.props.fetchingToggle(true)
        this.props.setPage(page)
        userAPI.getUsers(page, 10).then(data => {
            this.props.fetchingToggle(false)
            this.props.setUsers(data.items);
            this.props.updateAllUsersCount(data['totalCount']);
        });
    }
    render() {
        return <>
            <Users users={this.props.users}
                   friendToggle={this.friendToggle}
                   countOfPages={this.props.countOfPages}
                   currentPage={this.props.currentPage}
                   changePage={this.changePage.bind(this)}
                   isFetching={this.props.isFetching}
                   followInProgress={this.props.followInProgress} />
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
        followInProgress: state.usersPage.followInProgress,
}
}

export default connect(mapStateToProps,
    {followToggle, setUsers, updateAllUsersCount, setPage, fetchingToggle, followInProgressToggle})(UsersContainer);

