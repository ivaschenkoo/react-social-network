import React from "react";
import {Field} from "redux-form";


const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name={'login'} component={'input'} placeholder={'login'} /> <br/>
        <Field name={'password'} component={'input'} placeholder={'password'} type={'password'} /> <br/>
        <span><Field name={'rememberMe'} component={'input'} type={'checkbox'} /> Remember Me</span> <br/>
        <button>Submit</button>
    </form>
}

export default LoginForm;