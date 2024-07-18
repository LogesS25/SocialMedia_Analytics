package com.example.socialmediaAnalytics.service;

import com.example.socialmediaAnalytics.model.User;
import org.springframework.stereotype.Service;

public class UserService {

    public User getUser() {
        // Replace with actual logic to fetch user data from database or mock data
        User user = new User();
        user.setName("John Doe");
        user.setCategory("Influencer");
        user.setBio("Passionate about social media analytics");
        user.setContact("john.doe@example.com");
        user.setLinks("https://example.com/johndoe");
        user.setFollowers(10000);
        user.setFollowing(500);
        user.setPosts(200);
        // Set more fields as needed
        return user;
    }
}
