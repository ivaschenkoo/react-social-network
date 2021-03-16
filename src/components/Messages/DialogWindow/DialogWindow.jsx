import React from 'react';
import styles from './DialogWindow.module.css'
import Message from "./Message/Message";
import {Field} from "redux-form";


const DialogWindow = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.messageWrapper}>
                <ul className={styles.messageList}>
                    {props.messages.map( el => <Message key={el.id} sender={el.sender} text={el.text} time={el.time} />)}
                </ul>
            </div>
            <form className={styles.messageArea} onSubmit={props.handleSubmit(props.onSubmit)}>
                <label htmlFor="messageFile" className={styles.messageAttachment}>Test</label>
                <Field type="file" component="input" className="visuallyHidden" name="messageFile" id="message-file" />
                <div className={styles.textWrapper}>
                    <Field className={styles.messageText} component="textarea" name="messageText" />
                    {/*<button className={styles.smileButton}><span className='visuallyHidden'>Smiles</span></button>*/}
                </div>
                <button className={styles.buttonSend}>Send</button>
            </form>
        </div>
    );
}

export default DialogWindow;