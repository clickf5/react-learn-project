import React from 'react';
import DialogItem from './DialogItem';
import Message from './Message';
import styles from './style.module.css';

const Dialogs = (props) => {
    const newMessage = React.createRef();
    const addMessage = () => {
        const text = newMessage.current.value;
        alert(text);
    };
    const { dialogs, messages } = props.state;
    const dialogsElements = dialogs.map(({ name, id }) => <DialogItem name={name} id={id} />);
    const messagesElements = messages.map(({ message }) => <Message message={message} />);
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div className={styles.controls}>
                    <div>
                        <textarea ref={newMessage}></textarea>
                    </div>
                    <button onClick={addMessage}>Add post</button>
                </div>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;