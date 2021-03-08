import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './User.module.css'


const User = (props) => {
    return (
        <li className={styles.userItem}>
            <NavLink to={`/profile/${props.id}`}>
                <img src={props.photoUrl} className={styles.userPhoto} alt="#" width='50px' />
            </NavLink>
            <div className={styles.userDescriptionWrapper}>
                <NavLink to={`/profile/${props.id}`} className={styles.userLink}>
                    <h3 className={styles.userName}>{props.fullName}</h3>
                </NavLink>
            </div>
            <button className={styles.button}
                    onClick={() => {props.friendToggle(props.id)}}
                    disabled={props.followInProgress.some(id => id === props.id)}>
                {props.isFriend ? 'Unfriend': 'Add Friend'}
            </button>
        </li>
    )
}

export default User;