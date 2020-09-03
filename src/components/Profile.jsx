import React from 'react';
import profileBackground from '../images/qXGZxSSiA5g.jpg';

const Profile = () => {
    return (
      <main className="content">
        <div className="profile-background">
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
