import React from 'react';
import SidebarProfile from "./SidebarProfile";
import {connect} from "react-redux";
import userPhoto from '../../../../images/ffa09aec412db3f54deadf1b3781de2a.png'
import {compose} from "redux";


class SidebarProfileContainer extends React.Component {

    render() {
        return <SidebarProfile {...this.props} />
    }

}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.data.login,
    userId: state.auth.data.id,
    photo: state.profilePage.profile.photos.large ? state.profilePage.profile.photos.large : userPhoto,
})

export default compose(
    connect(mapStateToProps, {})
)(SidebarProfileContainer)
