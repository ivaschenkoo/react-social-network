import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.css'


const Dialog = (props) => {
    return (
        <NavLink to={`/messages/${props.userId}`} className={styles.profileLink} activeClassName={styles.active}>
            <article className={styles.wrapper}>
                <img src="https://7sisters.ru/wp-content/uploads/2020/05/tiran.jpg?resize=%2C" alt="Profile image" className={styles.profileImage}/>
                <div className={styles.messageWraper}>
                    <div>
                        <h3 className={styles.profileName}>{props.userName}</h3>
                        <p className={styles.message}>{props.message} </p>
                    </div>
                    <i className={styles.sendTime}>10:52</i>
                </div>
            </article>
        </NavLink>
    );
}

export default Dialog;