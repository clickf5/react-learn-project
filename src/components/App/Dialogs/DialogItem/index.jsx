import React from 'react';
import styles from './style.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const { name, id } = props;
    return (
        <NavLink to={`/dialogs/${id}`} className={styles.item} activeClassName={styles.active}>
            {name}
        </NavLink>
    );
}

export default DialogItem;
