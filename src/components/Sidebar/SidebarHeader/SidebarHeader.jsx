import React from 'react';
import styles from './SidebarHeader.module.css';
import SidebarProfile from './SidebarProfile/SidebarProfile';
import mainLogo from '../../../images/logo-trill.png'


const SidebarHeader = (props) => {
    return (
        <header className={styles.container}>
            <a href="#" className={styles.logoLink}>
                <img src={mainLogo} alt="website logo" className={styles.logoImage} />
            </a>

            <SidebarProfile />
        </header>
    )
}

export default SidebarHeader;