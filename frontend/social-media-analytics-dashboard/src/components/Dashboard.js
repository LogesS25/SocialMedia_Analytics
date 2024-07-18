import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h1>Social Media Analytics Dashboard</h1>
      <div className="user-details">
        <h2>User Details</h2>
        <p>Name: {userData.name}</p>
        <p>Category: {userData.category}</p>
        <p>Bio: {userData.bio}</p>
        <p>Contact: {userData.contact}</p>
        <p>Links: {userData.links}</p>
      </div>
      <div className="analytics">
        <h2>Analytics</h2>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Posts: {userData.posts}</p>
        {/* Add more analytics fields as needed */}
      </div>
    </div>
  );
};

export default Dashboard;
