import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PostAnalytics.css';

const PostAnalytics = () => {
  const [postAnalytics, setPostAnalytics] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/api/post-analytics')
      .then(response => {
        setPostAnalytics(response.data);
      })
      .catch(error => {
        console.error('Error fetching post analytics:', error);
      });
  }, []);

  return (
    <div className="post-analytics">
      <h1>Post Analytics</h1>
      <p>Account Reached: {postAnalytics.accountReached}</p>
      <p>Engaged Followers: {postAnalytics.engagedFollowers}</p>
      <p>Content Shared: {postAnalytics.contentShared}</p>
      {/* Add more post analytics fields as needed */}
    </div>
  );
};

export default PostAnalytics;
