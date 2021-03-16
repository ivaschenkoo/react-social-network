import React from 'react';
import Login from "./Login";
import {compose} from "redux";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";


class LoginConatiner extends React.Component {
    onSubmit = (data) => {
        console.log(data)
    }

    render() {
        return (
            <Login {...this.props} onSubmit={this.onSubmit} />
        );
    }

}

const mapStateToProps = (state) => {
    return {

    }
}

export default compose(
    reduxForm({form: 'login'}),
    connect(mapStateToProps, {})
)(LoginConatiner)