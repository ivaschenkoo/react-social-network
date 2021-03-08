import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {getUserInfo} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.getUserInfo(this.props.match.params.userId)
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

export default connect(mapStateToProps, {getUserInfo})(ProfileRouter);