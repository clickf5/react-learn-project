import React from 'react';
import profileBackground from '../../images/qXGZxSSiA5g.jpg';
import styles from './style.module.css'

const Profile = () => {
    return (
      <main className={styles.profile}>
        <div className={styles.profile_background}>
          <img src={profileBackground} />
        </div>
        <div>ava + description</div>
        <div>my post</div>
        <div>new post</div>
        <div>new post</div>
        <div>new post</div>
      </main>
    );
};

export default Profile;
