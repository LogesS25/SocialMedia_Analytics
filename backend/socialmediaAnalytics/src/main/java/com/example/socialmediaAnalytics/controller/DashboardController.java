package com.example.socialmediaAnalytics.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.socialmediaAnalytics.model.User;

import com.example.socialmediaAnalytics.model.Analytics;
import com.example.socialmediaAnalytics.service.AnalyticsService;
import com.example.socialmediaAnalytics.service.UserService;

public class DashboardController {
    @Autowired
    private UserService userService;

    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/user")
    public User getUserDetails() {
        // Replace with actual service method to fetch user details
        return userService.getUser();
    }

    @GetMapping("/analytics")
    public Analytics getPostAnalytics() {
        // Replace with actual service method to fetch post analytics data
        return analyticsService.getPostAnalytics();
    }
}
