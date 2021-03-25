import React from 'react';
import styles from './SidebarProfile.module.css';
import {NavLink} from "react-router-dom";


const SidebarProfile = (props) => {
    let url = props.isAuth ? `/profile/` : '/login'
    return (
        <article className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.imageLink}>
                    <img src={`${props.photo}`} width='50px' alt={props.isAuth ? props.name : 'undefined user' } />
                </span>
                <span className={styles.aboutWrapper}>
                    <NavLink to={url} className={styles.nameLink}>
                        <h3 className={styles.profileName}>{props.name || 'Please login'}</h3>
                    </NavLink>
                    {props.isAuth ? <button className={styles.button}
                                            onClick={() => props.logoutUser()}>Logout</button> : null}
                </span>
            </div>
        </article>
    )
}

export default SidebarProfile