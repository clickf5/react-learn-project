import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <NavLink to="/dialogs/1" className={styles.item} activeClassName={styles.active}>
                    Andrey
                </NavLink>
                <NavLink to="/dialogs/2" className={styles.item} activeClassName={styles.active}>
                    Eugene
                </NavLink>
                <NavLink to="/dialogs/3" className={styles.item} activeClassName={styles.active}>
                    Sandra
                </NavLink>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    Message 1
                </div>
                <div className={styles.message}>
                    Message 2
                </div>
                <div className={styles.message}>
                    Message 3
                </div>
                <div className={styles.message}>
                    Message 4
                </div>
            </div>
        </div>
    );
};

export default Dialogs;