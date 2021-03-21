import React from 'react';
import styles from './ContactItem.module.css'


const ContactItem = (props) => {
    let plug = `https://${props.contact}.com`
    return (
        <>
            {/*{props.link ?*/}
                <div className={styles.linkItem}>
                    <p className={styles.linkTitle}>{props.contact}</p>
                    <a href={props.link || plug} className={styles.link}>{props.link || plug.slice(8)}</a>
                </div>
                {/*: ''}*/}

        </>
    )
}

export default ContactItem