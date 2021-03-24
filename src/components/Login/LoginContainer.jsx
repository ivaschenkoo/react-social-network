import React from 'react';
import Login from "./Login";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {postUserData} from "../../redux/authReducer";


const LoginContainer = (props) => {
    let onSubmit = ({email, password, rememberMe}) => {
        props.postUserData(email, password, rememberMe)
    }
    return <Login {...props} onSubmit={onSubmit} />
}



const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.data.id,
})

export default compose(
    reduxForm({form: 'login'}),
    connect(mapStateToProps, {postUserData})
)(LoginContainer)