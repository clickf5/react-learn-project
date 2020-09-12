import React from 'react';
import Info from './Info';
import MyPosts from './MyPosts';
import wallpaper from '../../../images/wallpaper.jpg';
import styles from './style.module.css'

const Profile = (props) => {
    return (
      <>
        <div className={styles.profile_background}>
          <img src={wallpaper} />
        </div>
        <Info />
        <MyPosts state={props.state} />
      </>
    );
};

export default Profile;
