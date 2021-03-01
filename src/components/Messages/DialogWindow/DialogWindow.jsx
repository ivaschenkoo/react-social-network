import React from 'react';
import styles from './DialogWindow.module.css'
import Message from "./Message/Message";


const DialogWindow = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.messageWrapper}>
                <ul className={styles.messageList}>
                    {props.messages.map( el => <Message key={el.id} sender={el.sender} text={el.text} time={el.time} />)}
                </ul>
            </div>
            <div className={styles.messageArea}>
                <label htmlFor="message-file" className={styles.messageAttachment}>Test</label>
                <input className="visuallyHidden" type="file" name="message-file" id="message-file"/>
                <div className={styles.textWrapper}>
                    <textarea className={styles.messageText} value={props.defaultValue}
                              onChange={(ev) => props.changeState(ev)}/>
                    <button className={styles.smileButton}><span className='visuallyHidden'>Smiles</span></button>
                </div>
                <button className={styles.buttonSend} onClick={props.updateState}>Send</button>
            </div>
        </div>
    );
}

export default DialogWindow;