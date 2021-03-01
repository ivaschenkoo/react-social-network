import React from 'react';
import styles from './CreatePost.module.css'


const CreatePost = (props) => {
    return (
        <div className={styles.postWrapper}>
            <div className={styles.inputWrapper}>
                <img className={styles.profileImage} src="https://7sisters.ru/wp-content/uploads/2020/05/tiran.jpg?resize=%2C" alt="" width='45px' height='45px'/>
                <form className={styles.postForm}>
                    <textarea className={styles.textInput} name="post-text" id="text" placeholder='What`s new, John?'></textarea>
                    <div className={styles.addItem}>
                        <label htmlFor="file" className={styles.attachment}>Test</label>
                        <input className="visuallyHidden" type="file" name="post-file" id="file"/>
                        <button className={styles.button} type='submit'>Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;