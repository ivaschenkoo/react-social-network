import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {changeUserStatus, getUserProfile, getUserStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     profileStatus={this.props.profileStatus}
                     isFetching={this.props.isFetching}
                     changeUserStatus={this.props.changeUserStatus} />
        );
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profileStatus: state.profilePage.profileStatus,
        isFetching: state.profilePage.isFetching,
    }
}

export default compose(withRouter, withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getUserStatus, changeUserStatus}))(ProfileContainer)
