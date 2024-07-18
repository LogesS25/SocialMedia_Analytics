package com.example.socialmediaAnalytics.model;

import lombok.Data;

@Data
public class User {
    private String name;
    private String category;
    private String bio;
    private String contact;
    private String links;
    private int followers;
    private int following;
    private int posts;

}
