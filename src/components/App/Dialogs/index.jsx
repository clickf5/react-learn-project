import React from 'react';
import DialogItem from './DialogItem';
import Message from './Message';
import styles from './style.module.css';

const dialogs = [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Eugene' },
    { id: 3, name: 'Sandra' }
];

const dialogsElements = dialogs.map(({ name, id }) => <DialogItem name={name} id={id} />);

const messages = [
    { id: 1, message: 'msg1' },
    { id: 2, message: 'msg1' },
    { id: 3, message: 'msg1' }
];

const messagesElements = messages.map(({ message }) => <Message message={message} />);

const Dialogs = () => {
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