package com.example.socialmediaAnalytics.controller;

import com.example.socialmediaAnalytics.model.User;
import com.example.socialmediaAnalytics.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public User getUser() {
        // Replace with actual service method to fetch user data
        return userService.getUser();
    }
}
