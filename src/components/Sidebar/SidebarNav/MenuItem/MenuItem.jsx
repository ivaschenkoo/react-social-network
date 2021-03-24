import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './MenuItem.module.css'

class MenuItem extends React.Component {
    render() {
        return (
            <li className={styles.menuItem}>
                <NavLink to={this.props.link} className={styles.menuLink} activeClassName={styles.activeLink}>
                    <i className={`${styles.icon} ${styles[this.props.icon]}`} />
                    <p>{this.props.name}</p>
                </NavLink>
            </li>
        )
    }
}

export default MenuItem