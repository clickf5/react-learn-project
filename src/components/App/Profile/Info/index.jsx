import React from 'react';
import styles from './style.module.css';
import avatar from '../../../../images/avatar.jpg';

const Info = () => {
  return (
      <div className={styles.info}>
        <div className={styles.avatar}>
          <img src={avatar} />
        </div>
        <div className={styles.name}>Eugene Panin</div>
      </div>
  );
};

export default Info;
