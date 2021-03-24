import React from "react";
import {Field} from "redux-form";
import styles from './LoginForm.module.css'
import {minLength, required} from "../../../utils/validators/validators";
import {LoginFormInput} from "../../common/FieldsCreators/FieldsCreators";


const minLength4 = minLength(4);

const LoginForm = (props) => {
    return (
        <div className={styles.wrapper}>
            <form onSubmit={props.handleSubmit(props.onSubmit)}>
                <Field name='email'
                       className={styles.inputForm}
                       component={LoginFormInput}
                       placeholder='Email'
                       type='email'
                       validate={[required, minLength4]}
                />
                <Field name='password'
                       className={styles.inputForm}
                       component={LoginFormInput}
                       placeholder='Password'
                       type='password'
                       validate={[required, minLength4]}
                />
                {props.error && <p>{props.error}</p>}
                <div className={styles.adWrapper}>
                    <span className={styles.checkbox}>
                        <Field name={'rememberMe'}
                           component={'input'}
                           type={'checkbox'}
                        /> Remember Me
                    </span>
                    <button className={styles.button}>Submit</button>
                </div>
            </form>
            <a href="https://social-network.samuraijs.com/signUp" className={styles.link}>Register</a>
        </div>
    )
}

export default LoginForm