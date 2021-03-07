import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {fetchingToggle, setProfile, setStatus} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {

    getUserInfo (userId) {
        this.props.fetchingToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.fetchingToggle(false)
            this.props.setProfile(response.data)
        })
    }

    getUserStatus (userId) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`).then(response => {
            this.props.setStatus(response.data)
        })
    }


    componentDidMount() {
        this.getUserInfo(this.props.match.params.userId)
        this.getUserStatus(this.props.match.params.userId)
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