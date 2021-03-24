import React from 'react';
import ContentFeed from './ContentFeed/ContentFeed';
import styles from './Feed.module.css'
import FilterFeed from './FilterFeed/FilterFeed';


const Feed = (props) => {
    return (
        <main className={styles.wrapper}>
            <ContentFeed />
            <FilterFeed />
        </main>
    );
}

export default Feed