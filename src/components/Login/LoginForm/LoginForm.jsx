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
                <div className={styles.adWrapper}>
                    <span>
                        <Field name={'rememberMe'}
                           component={'input'}
                           type={'checkbox'}
                        /> Remember Me
                    </span>
                    {props.error ?
                        <div>
                            {props.error === 1 ? 'incorrect email or password'
                                : props.error === 10 ? 'captcha is required'
                                    : props.error === 11 ? 'undefined error' : null}
                        </div>
                        : null
                    }
                    <button className={styles.button}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm