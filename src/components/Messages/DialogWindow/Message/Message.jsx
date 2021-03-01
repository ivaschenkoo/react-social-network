import React from 'react';
import styles from './Message.module.css'


const Message = (props) => {
    return (
        <li className={`${styles.messageWrapper} ${props.sender ? styles.sender : ''}`} >
            <p className={styles.messageText}>{props.text}</p>
            <span className={styles.metaWrapper}>
                <i className={styles.messageTime}>{props.time}</i>
            </span>   
        </li>
    );
}

export default Message;