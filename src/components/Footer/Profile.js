import React from 'react';
import './Profile.scss';

const Profile = () => {
  // Set default user information
  const mockUser = {
    username: 'Mounisha',
    email: 'mounisha@gmail.com',
  };

  // Use mockUser as initial state
  const [user, setUser] = React.useState(mockUser);

  return (
    <div className="patient-profile-container">
      <div className="user-image">
        <img src="https://tse3.mm.bing.net/th?id=OIP._YgVOXjtiO95gnUJyaCrVAHaHa&pid=Api&P=0&h=220" alt="Profile" />
      </div>
      <h2>Your Profile</h2>
      <div className="user-details">
        {/* Use user object to display information */}
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        {/* Add more user details here */}
      </div>
    </div>
  );
};

export default Profile;
