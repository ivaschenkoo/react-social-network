import React from 'react';
import styles from './SidebarHeader.module.css';
import mainLogo from '../../../images/logo-trill.png'
import SidebarProfileContainer from "./SidebarProfile/SidebarProfileContainer";


const SidebarHeader = (props) => {
    return (
        <header className={styles.container}>
            <a href="#" className={styles.logoLink}>
                <img src={mainLogo} alt="website logo" className={styles.logoImage} />
            </a>

            <SidebarProfileContainer />
        </header>
    )
}

export default SidebarHeader;