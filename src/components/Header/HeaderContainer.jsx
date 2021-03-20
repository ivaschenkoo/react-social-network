import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUser} from "../../redux/authReducer";


const HeaderContainer = (props) => {

    useEffect(() => {
        props.getAuthUser()
    })

    return (
        <Header {...props} />
    );
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.data.login,
    }
}

export default connect(mapStateToProps, {getAuthUser})(HeaderContainer);