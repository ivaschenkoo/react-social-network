import React from 'react';
import Login from "./Login";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {postUserData} from "../../redux/authReducer";


class LoginContainer extends React.Component {
    onSubmit = ({email, password, rememberMe}) => {
        this.props.postUserData(email, password, rememberMe)
    }

    render() {
        return (
            <Login {...this.props} onSubmit={this.onSubmit} />
        );
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.data.id,
    error: state.auth.errorCode,
})

export default compose(
    reduxForm({form: 'login'}),
    connect(mapStateToProps, {postUserData})
)(LoginContainer)