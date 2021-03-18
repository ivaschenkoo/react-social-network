import React from 'react';
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";


const Login = (props) => {
    if (props.isAuth) return <Redirect to={`/profile/${props.userId}`} />

    return <aside>
        <LoginForm {...props} onSubmit={props.onSubmit} />
    </aside>
}

export default Login