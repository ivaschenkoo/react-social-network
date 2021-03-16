import React from "react";
import {Field} from "redux-form";
import {minLength, required} from "../../../utils/validators/validators";
import {LoginFormInput} from "../../common/FieldsCreators/FieldsCreators";


const minLength4 = minLength(4);

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit(props.onSubmit)}>
        <Field name='test'
               component={LoginFormInput}
               className='test'
               placeholder='test'
               validate={[required, minLength4]}
        />
        <Field name='login'
               component='input'
               placeholder='login'
               validate={[required, minLength4]}
        /> <br/>
        <Field name={'password'}
               component={'input'}
               placeholder={'password'}
               type={'password'}
               validate={[required]}

        /> <br/>
        <span>
            <Field name={'rememberMe'}
                   component={'input'}
                   type={'checkbox'}
            /> Remember Me
        </span> <br/>
        <button>Submit</button>
    </form>
}

export default LoginForm