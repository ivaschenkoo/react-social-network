import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {changeUserStatus, getUserProfile, getUserStatus} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.match.params.userId || props.loggedUserId;
        props.getUserProfile(userId);
        props.getUserStatus(userId);
    }, [props.loggedUserId])

    return <Profile profile={props.profile}
                    profileStatus={props.profileStatus}
                    isFetching={props.isFetching}
                    changeUserStatus={props.changeUserStatus}/>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileStatus: state.profilePage.profileStatus,
    isFetching: state.profilePage.isFetching,
    followInProgress: state.usersPage.followInProgress,
    loggedUserId: state.auth.data.id,
})

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getUserStatus, changeUserStatus}),
)(ProfileContainer)
