import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserDetails.css';

const UserDetails = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/user-details')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <p>Name: {userData.name}</p>
      <p>Category: {userData.category}</p>
      <p>Bio: {userData.bio}</p>
      <p>Contact: {userData.contact}</p>
      <p>Links: {userData.links}</p>
      {/* Add more user details fields as needed */}
    </div>
  );
};

export default UserDetails;
