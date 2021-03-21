import React from 'react';
import Post from './Post/Post';


const Posts = (props) => {
    return (
        <div>
            <div>
                <a href="?filter=all">All</a>
                <a href="?filter=groups">Groups</a>
                <a href="?filter=friends">Friends</a>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;