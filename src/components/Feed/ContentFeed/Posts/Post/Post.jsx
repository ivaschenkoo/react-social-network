import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <article>
            <img src="" alt=""/>
            <div>
                <div>
                    <div>
                        <h3>John Doe</h3>
                        <p>posted</p>
                        <button>options</button>
                    </div>
                    <i>2 hours, 1 minute ago</i>
                </div>
                <div>
                    <p className={style.postContent}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived
                        not only five centuries, but also the leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                </div>
                <div>
                    <button>like</button>
                    <button>comment</button>
                </div>
            </div>
        </article>
    )
}

export default Post;