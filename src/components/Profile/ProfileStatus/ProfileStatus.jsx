import React from "react";
import styles from './ProfileStatus.module.css'

const ProfileStatus = (props) => {
    return <p className={styles.userStatus}>{props.profileStatus || 'Status will be here'}</p>
}

export default ProfileStatus;