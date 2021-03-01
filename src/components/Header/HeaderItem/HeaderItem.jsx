import React from 'react';
import styles from './HeaderItem.module.css'


const HeaderItem = (props) => {
    return (
        <a href="" className={`${styles.item} ${styles.notification}`}>
            <p className="visuallyHidden">Notifications</p>
        </a>
    );
}

export default HeaderItem;