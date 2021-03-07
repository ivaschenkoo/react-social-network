import React from "react";
import styles from './Preloader.module.css'


const Preloader = (props) => {
    return (<>
        {props.isFetching ? <div className={styles.ldsRoller}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div> : null}
    </>)
}

export default Preloader;