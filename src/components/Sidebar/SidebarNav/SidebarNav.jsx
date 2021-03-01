import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import styles from './SidebarNav.module.css'

class SidebarNav extends React.Component {
    render() {
        return (
            <nav className={styles.wrapper}>
                <ul className={styles.menuList}>
                    <MenuItem link='/feed' name='Feed' icon='feedIcon' />
                    <MenuItem link='/users' name='Users' icon='usersIcon' />
                    <MenuItem link='/messages' name='Messages' icon='messagesIcon' />
                    <MenuItem link='/photos' name='Photos' icon='photosIcon' />
                    <MenuItem link='/audio' name='Audio' icon='audioIcon' />
                    <MenuItem link='/video' name='Video' icon='videoIcon' />
                </ul>
            </nav>
        )
    }
}

export default SidebarNav;