import React from 'react';
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import styles from './Login.module.css'


const Login = (props) => {
    if (props.isAuth) return <Redirect to={`/profile/${props.userId}`} />

    return <aside className={styles.wrapper}>
        <LoginForm {...props} error={props.error} onSubmit={props.onSubmit} />
    </aside>
}

export default Login