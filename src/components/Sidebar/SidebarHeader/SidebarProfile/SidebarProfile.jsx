import React from 'react';
import styles from './SidebarProfile.module.css';


const SidebarProfile = (props) => {
    return (
        <article className={styles.container}>
            <div className={styles.wrapper}>
                <a href="#" className={styles.imageLink}>
                    <img src="https://7sisters.ru/wp-content/uploads/2020/05/tiran.jpg?resize=%2C" alt="" width='50px' height='50px' />
                </a>
                <a href="#" className={styles.nameLink}>
                    <h3>John Doe</h3>
                </a>
                <p className={styles.profileStatus}>Member</p>
            </div>
            <ul className={styles.accWrapper}>
                <li>
                    <a href="#" className={styles.accLink}><span>1</span><p>Friends</p></a>
                </li>
                <li>
                <a href="#" className={styles.accLink}><span>5</span><p>Groups</p></a>
                </li>
            </ul>
        </article>
    )
}

export default SidebarProfile;