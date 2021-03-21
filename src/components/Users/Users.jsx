import React from 'react';
import userPhoto from '../../images/ffa09aec412db3f54deadf1b3781de2a.png'
import styles from './Users.module.css'
import User from "./User/User";
import FilterUsers from "./UsersFilter/FilterUsers";
import dArrowLeft from '../../images/l-0.svg'
import arrowLeft from '../../images/l-1.svg'
import arrowRight from '../../images/r-1.svg'
import dArrowRight from '../../images/r-0.svg'
import Preloader from "../common/Preloader/Preloader";


const Users = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.preloaderWrapper}>
                <Preloader isFetching={props.isFetching} />
            </div>
            <div className={styles.mainWrapper}>
                <div className={styles.mainContent}>
                    <ul className={styles.usersList}>
                        {props.users.map(el => <User id={el.id}
                                                     key={el.id}
                                                     fullName={`${el.name}`}
                                                     photoUrl={el.photos.small ? el.photos.small : userPhoto}
                                                     isFriend={el.followed}
                                                     subscribe={props.subscribe}
                                                     friendToggle={props.friendToggle}
                                                     followInProgress={props.followInProgress} />)}
                    </ul>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <button disabled={props.currentPage <= 10}
                                    onClick={() => {props.changePage(props.currentPage - 10)}}>
                                <img src={dArrowLeft} alt="arrowLeft" width='18px' height='auto'/>
                            </button>
                        </li>
                        <li className={styles.navItem}>
                            <button disabled={props.currentPage <= 1}
                                    onClick={() => {props.changePage(props.currentPage - 1)}}>
                                <img src={arrowLeft} alt="arrowLeft" width='18px' height='auto'/>
                            </button>
                        </li>
                        <li className={styles.navItem}>
                            <button className={styles.nonActiveButton}>{props.currentPage}</button>
                        </li>
                        <li className={styles.navItem}>
                            <button disabled={props.currentPage === props.countOfPages}
                                    onClick={() => {props.changePage(props.currentPage + 1)}}>
                                <img src={arrowRight} alt="arrowLeft" width='18px' height='auto'/>
                            </button>
                        </li>
                        <li className={styles.navItem}>
                            <button disabled={props.currentPage >= props.countOfPages - 9}
                                    onClick={() => {props.changePage(props.currentPage + 10)}}>
                                <img src={dArrowRight} alt="arrowLeft" width='18px' height='auto'/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <FilterUsers className={styles.filter} />
        </div>
    )
}

export default Users;