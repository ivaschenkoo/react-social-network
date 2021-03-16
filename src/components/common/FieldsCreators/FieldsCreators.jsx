import React from 'react';
import styles from './FieldsCreators.module.css'


const FieldsCreator = (Element) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <Element {...input} {...props} className={props.className + (hasError ? ` ${styles.formError}` : "") } />
            { hasError && <span> { meta.error } </span> }
        </div>
    );
};

export const LoginFormInput = FieldsCreator("input")