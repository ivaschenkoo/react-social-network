import React from 'react';
import styles from './SidebarProfile.module.css';
import {NavLink} from "react-router-dom";


const SidebarProfile = (props) => {
    let url = props.isAuth ? `/profile/${props.userId}` : '/login'
    return (
        <article className={styles.container}>
            <div className={styles.wrapper}>
                <span className={styles.imageLink}>
                    <img src={`${props.photo}`} width='50px' />
                </span>
                <NavLink to={url} className={styles.nameLink}>
                    <h3 className={styles.profileName}>{props.name || 'Please login'}</h3>
                </NavLink>
            </div>
            <ul className={styles.accWrapper}>
                <li>
                    {props.isAuth ?
                        <a href="#" className={styles.accLink}>
                            <span>1</span><p>Friends</p>
                        </a>
                        : null
                    }
                </li>
                <li>
                    {props.isAuth ?
                        <a href="#" className={styles.accLink}>
                            <span>5</span><p>Groups</p>
                        </a>
                        : null
                    }

                </li>
            </ul>
        </article>
    )
}

export default SidebarProfile