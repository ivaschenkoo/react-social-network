import React from 'react';
import styles from './Messages.module.css'
import DialogWindowContainer from "./DialogWindow/DialogWindowContainer";


const Messages = (props) => {
    return (
        <main className={styles.mainWrapper}>
            <aside className={styles.asideWrapper}>
                <header className={styles.searchWrapper}>
                    <input type="search" name="Search" id="message-search" placeholder='Search' className={styles.messagesSearch}/>
                    <button className={styles.createButton}>
                        <img src="https://raw.githubusercontent.com/ivaschenkoo/ivaschenko.github.io/33e60e444e15a280c9b3e6524e738103111ab0d0/fi-rr-plus-small.svg" alt=""/>
                    </button>
                </header>
                { props.dialogs }
            </aside>
            <DialogWindowContainer className={styles.messagesWrapper} />
        </main>
    );
}

export default Messages;