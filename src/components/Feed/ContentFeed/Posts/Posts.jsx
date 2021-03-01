import React from 'react';
import Post from './Post/Post';


const Posts = (props) => {
    return (
        <div>
            <div>
                <a href="#">All</a>
                <a href="#">Groups</a>
                <a href="#">Friends</a>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Posts;