import React from 'react';
import styles from './style.module.css';

const Message = (props) => {
    const { message } = props;
    return (
        <div className={styles.message}>
            {message}
        </div>
    );
}

export default Message;
