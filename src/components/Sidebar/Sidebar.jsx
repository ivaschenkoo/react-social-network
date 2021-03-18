import React from 'react';
import styles from './Sidebar.module.css';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarNav from './SidebarNav/SidebarNav';


const Sidebar = (props) => {
    return (
        <aside className={styles.wrapper}>
            <SidebarHeader />
            <SidebarNav />
        </aside>
    )
}

export default Sidebar