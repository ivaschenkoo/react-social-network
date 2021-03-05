import React from 'react';
import userPhoto from '../../images/ffa09aec412db3f54deadf1b3781de2a.png'
import styles from './Users.module.css'
import User from "./User/User";
import FilterUsers from "./UsersFilter/FilterUsers";


const Users = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.mainWrapper}>
                <div className={styles.mainContent}>
                    <ul className={styles.usersList}>
                        {props.users.map(el => <User id={el.id}
                                                          key={el.id}
                                                          fullName={`${el.name}`}
                                                          photoUrl={el.photos.small ? el.photos.small : userPhoto}
                                                          isFriend={el.followed}
                                                          followToggle={props.followToggle} />)}
                    </ul>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <button disabled={props.currentPage <= 10}
                                    onClick={() => {props.changePage(props.currentPage - 10)}}>--</button>
                        </li>
                        <li className={styles.navItem}>
                            <button disabled={props.currentPage <= 1}
                                    onClick={() => {props.changePage(props.currentPage - 1)}}>-</button></li>
                        <li className={styles.navItem}>
                            <button className={styles.nonActiveButton}>{props.currentPage}</button>
                        </li>
                        <li className={styles.navItem}>
                            <button disabled={props.currentPage === props.countOfPages}
                                    onClick={() => {props.changePage(props.currentPage + 1)}}>+</button>
                        </li>
                        <li className={styles.navItem}>
                            <button disabled={props.currentPage >= props.countOfPages - 9}
                                    onClick={() => {props.changePage(props.currentPage + 10)}}>++</button>
                        </li>
                    </ul>
                </div>
            </div>
            <FilterUsers />
        </div>
    )
}

export default Users;