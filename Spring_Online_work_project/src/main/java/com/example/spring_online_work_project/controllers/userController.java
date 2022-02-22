package com.example.spring_online_work_project.controllers;

import com.example.spring_online_work_project.entities.UserEntity;
import com.example.spring_online_work_project.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("user")
public class userController {
    @Autowired
    private UserRepo userRepo;
    @GetMapping
    public List<UserEntity> getusers(){
        return this.userRepo.findAll();
    }


}
