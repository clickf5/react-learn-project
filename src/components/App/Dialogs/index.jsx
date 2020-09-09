import React from 'react';
import DialogItem from './DialogItem';
import Message from './Message';
import styles from './style.module.css';

const Dialogs = (props) => {
    const { dialogs, messages } = props.state;
    const dialogsElements = dialogs.map(({ name, id }) => <DialogItem name={name} id={id} />);
    const messagesElements = messages.map(({ message }) => <Message message={message} />);
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;