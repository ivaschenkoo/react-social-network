import React from 'react';
import LoginForm from "./LoginForm/LoginForm";


const Login = (props) => {
    return <aside>
        <LoginForm {...props} onSubmit={props.onSubmit} />
    </aside>
}

export default Login;