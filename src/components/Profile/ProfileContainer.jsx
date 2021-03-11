import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.match.params.userId)
    }

    render() {
        return (
            <Profile isFetching={this.props.isFetching}
                     profile={this.props.profile}
                     userId={this.props.match.params.userId}/>
        );
    }

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isFetching: state.profilePage.isFetching
    }
}

export default compose(withRouter, withAuthRedirect,
    connect(mapStateToProps, {getUserProfile}))(ProfileContainer)
