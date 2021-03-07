import React from 'react';
import styles from './Profile.module.css'
import {NavLink} from "react-router-dom";
import defaultPhoto from "../../images/ffa09aec412db3f54deadf1b3781de2a.png";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {
    return (
        <>
            <div className={styles.preloader}>
                <Preloader isFetching={props.isFetching}/>
            </div>
            <div className={styles.mainWrapper}>
                <header className={styles.headerWrapper}>
                    <NavLink to='#'>
                        <img src={props.profile.photos.large || defaultPhoto}
                             alt="#" width='200px' height='auto' className={styles.headerImage}/>
                    </NavLink>
                    <div className={styles.userInfo}>
                        <h3 className={styles.userName}>{props.profile.fullName}</h3>
                        <p className={styles.userStatus}>{props.profileStatus || 'Status will be here'}</p>
                    </div>
                </header>
                <main className={styles.descriptionWrapper}>
                    <section className={styles.about}>
                        <h4>About me</h4>
                        <div>
                            <p>{props.profile.aboutMe}</p>
                        </div>
                    </section>
                    <section className={styles.job}>
                        <h4>Job</h4>
                        <div>
                            <i>Ищу работу: {props.profile.lookingForAJob ? "да" : "нет"}</i>
                            <p>{props.profile.lookingForAJobDescription}</p>
                        </div>
                    </section>
                    <section className={styles.contacts}>
                        <h4>Contacts</h4>
                        <ul className={styles.linkList}>
                            <li className={styles.linkItem}>
                                <p>github</p>
                                <a href={props.profile.contacts.github}>github</a>
                            </li>
                            <li className={styles.linkItem}>
                                <p>mainLink</p>
                                <a href={props.profile.contacts.mainLink}>mainLink</a>
                            </li>
                            <li className={styles.linkItem}>
                                <p>facebook</p>
                                <a href={props.profile.contacts.facebook}>facebook</a>
                            </li>
                            <li className={styles.linkItem}>
                                <p>instagram</p>
                                <a href={props.profile.contacts.instagram}>instagram</a>
                            </li>
                            <li className={styles.linkItem}>
                                <p>vk</p>
                                <a href={props.profile.contacts.vk}>vk</a>
                            </li>
                            <li className={styles.linkItem}>
                                <p>website</p>
                                <a href={props.profile.contacts.website}>website</a>
                            </li>
                            <li className={styles.linkItem}>
                                <p>youtube</p>
                                <a href={props.profile.contacts.youtube}>youtube</a>
                            </li>
                            <li className={styles.linkItem}>
                                <p>twitter</p>
                                <a href={props.profile.contacts.twitter}>twitter</a>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Profile;