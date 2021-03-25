import React from 'react';
import SidebarProfile from "./SidebarProfile";
import {connect} from "react-redux";
import userPhoto from '../../../../images/ffa09aec412db3f54deadf1b3781de2a.png'
import {compose} from "redux";
import {logoutUser} from "../../../../redux/authReducer";


const SidebarProfileContainer = (props) => {
    return <SidebarProfile {...props} />
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    name: state.auth.data.login,
    photo: state.auth.photo ? state.auth.photo : userPhoto,
})

export default compose(
    connect(mapStateToProps, {logoutUser})
)(SidebarProfileContainer)
