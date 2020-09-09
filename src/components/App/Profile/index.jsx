import React from 'react';
import Info from './Info';
import MyPosts from './MyPosts';
import wallpaper from '../../../images/wallpaper.jpg';
import styles from './style.module.css'

const Profile = (props) => {
    const { posts } = props;
    return (
      <>
        <div className={styles.profile_background}>
          <img src={wallpaper} />
        </div>
        <Info />
        <MyPosts posts={posts} />
      </>
    );
};

export default Profile;
