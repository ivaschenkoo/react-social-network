import React from 'react';
import styles from './Profile.module.css'
import {NavLink} from "react-router-dom";
import defaultPhoto from "../../images/ffa09aec412db3f54deadf1b3781de2a.png";
import Preloader from "../common/Preloader/Preloader";
import ProfileStatusComponent from "./ProfileStatus/ProfileStatusComponent";
import ContactItem from "./ContactItem/ContactItem";


const Profile = (props) => {
    let contacts = Object.entries(props.profile.contacts)
    return (
        <>
            {props.isFetching ?
                <div className={styles.preloader}>
                    <Preloader isFetching={props.isFetching}/>
                </div> : null}

            <div className={styles.mainWrapper}>
                <section className={styles.profileWrapper}>
                    <NavLink to='#'>
                        <img src={props.profile.photos.large || defaultPhoto}
                             alt="#" width='200px' height='auto' className={styles.headerImage}/>
                    </NavLink>
                </section>
                <section className={styles.about}>
                    <h3 className={styles.sectionHeader}>{props.profile.fullName}</h3>
                    <ProfileStatusComponent profileStatus={props.profileStatus}
                                            changeUserStatus={props.changeUserStatus}/>

                    <div>
                        <h4 className={styles.sectionHeader}>About me</h4>
                        <div>
                            <p className={styles.sectionDescription}>
                                {props.profile.aboutMe || 'It will be written about me here'}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.sectionHeader}>Job</h4>
                        <div>
                            <i>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</i>
                            <p>{props.profile.lookingForAJobDescription}</p>
                        </div>
                    </div>
                </section>
                <section className={styles.contacts}>
                    <h4 className={styles.sectionHeader}>Contacts</h4>
                        <div className={styles.linkList}>
                            {contacts.map(el => <ContactItem contact={el[0]} link={el[1]} />)}
                        </div>
                </section>
            </div>
        </>
    )
}

export default Profile;