import React from 'react';
import styles from './style.module.css';

const Sidebar = (props) => {
    const { friends } = props.state;
    const items = friends.map((friend) => <div className={styles.friend}>
            <div className={styles.ava}></div>
            <div className={styles.name}>{friend.name}</div>
        </div>);
    return (
        <div className={styles.sidebar}>
            <div><h3>Friends:</h3></div>
            <div className={styles.friends}>
                {items}
            </div>
        </div>
    );
}

export default Sidebar;
