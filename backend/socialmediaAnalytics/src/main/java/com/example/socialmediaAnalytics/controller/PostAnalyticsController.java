package com.example.socialmediaAnalytics.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.socialmediaAnalytics.model.Analytics;
import com.example.socialmediaAnalytics.service.AnalyticsService;

public class PostAnalyticsController {
    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping
    public Analytics getPostAnalytics() {
        // Replace with actual service method to fetch post analytics data
        return analyticsService.getPostAnalytics();
    }
}
