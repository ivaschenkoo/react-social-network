import React from 'react';
import styles from './ContentFeed.module.css'
import CreatePost from './CreatePost/CreatePost';
import Posts from './Posts/Posts';


const ContentFeed = (props) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.newPost}>
                <CreatePost />
            </div>
            <Posts />
        </section>
    );
}

export default ContentFeed;