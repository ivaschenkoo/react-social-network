import React from "react";
import {Field} from "redux-form";
import {minLength, required} from "../../../utils/validators/validators";
import {LoginFormInput} from "../../common/FieldsCreators/FieldsCreators";


const minLength4 = minLength(4);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name='email'
               component={LoginFormInput}
               placeholder='email'
               type='email'
               validate={[required, minLength4]}
        />
        <Field name='password'
               component={LoginFormInput}
               placeholder='password'
               type='password'
               validate={[required, minLength4]}
        />
        <span>
            <Field name={'rememberMe'}
                   component={'input'}
                   type={'checkbox'}
            /> Remember Me
        </span> <br/>
        {props.error ?
            <div>
                {props.error === 1 ? 'incorrect email or password'
                        : props.error === 10 ? 'captcha is required'
                            : props.error === 11 ? 'undefined error' : null}
            </div>
            : null
        }
        <button>Submit</button>
    </form>
}

export default LoginForm