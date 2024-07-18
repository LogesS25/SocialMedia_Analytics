package com.example.socialmediaAnalytics.repository;

import com.example.socialmediaAnalytics.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<User, Long> {

}
