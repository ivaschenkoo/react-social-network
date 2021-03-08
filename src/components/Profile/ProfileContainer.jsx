import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {fetchingToggle, setProfile, setStatus} from "../../redux/profileReducer";
import {profileAPI} from "../../api/api";


class ProfileContainer extends React.Component {




    componentDidMount() {
        this.props.fetchingToggle(true)
        profileAPI.getUserInfo(this.props.match.params.userId).then(data => {
            this.props.setProfile(data)
        })
        profileAPI.getUserStatus(this.props.match.params.userId).then(data => {
            this.props.setStatus(data)
            this.props.fetchingToggle(false)
        })
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
        profileStatus: state.profilePage.profileStatus,
        isFetching: state.profilePage.isFetching
    }
}

let ProfileRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfile, setStatus, fetchingToggle})(ProfileRouter);