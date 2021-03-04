import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './User.module.css'


const User = (props) => {
    return (
        <li className={styles.userItem}>
            <NavLink to={`/users/${props.id}`}>
                <img src={props.photoUrl} className={styles.userPhoto} alt="#" width='50px' />
            </NavLink>
            <div className={styles.userDescriptionWrapper}>
                <NavLink to={`/users/${props.id}`} className={styles.userLink}>
                    <h3 className={styles.userName}>{props.fullName}</h3>
                </NavLink>
            </div>
            <button className={styles.button}
                    onClick={() => props.followToggle(props.id) }>{props.isFriend ? 'Unfriend': 'Add Friend'}</button>
        </li>
    )
}

export default User;