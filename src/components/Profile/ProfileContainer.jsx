import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus} from "../../redux/profileReducer";
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
            <Profile isFetching={this.props.isFetching}
                     profile={this.props.profile}
                     profileStatus={this.props.profileStatus} />
        );
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching,
        profileStatus: state.profilePage.profileStatus,
    }
}

export default compose(withRouter, withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getUserStatus}))(ProfileContainer)
