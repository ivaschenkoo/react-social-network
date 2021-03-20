import React from 'react';
import styles from './FieldsCreators.module.css'


const FieldsCreator = (Element) => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error && !meta.active;
    return (
        <div className={styles.inputWrapper}>
            <Element {...input} {...props} className={props.className + (hasError ? ` ${styles.formError}` : "") } />
            { hasError && <span className={styles.errorMessage}>{ meta.error }</span> }
        </div>
    );
};

export const LoginFormInput = FieldsCreator("input")