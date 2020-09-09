import React from 'react';
import DialogItem from './DialogItem';
import Message from './Message';
import styles from './style.module.css';

const dialogsElements = (dialogs) => dialogs.map(({ name, id }) => <DialogItem name={name} id={id} />);

const messagesElements = (messages) => messages.map(({ message }) => <Message message={message} />);

const Dialogs = (props) => {
    const { dialogs, messages } = props;
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements(dialogs)}
            </div>
            <div className={styles.messages}>
                {messagesElements(messages)}
            </div>
        </div>
    );
};

export default Dialogs;