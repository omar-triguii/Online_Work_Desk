package com.example.spring_online_work_project.controllers;

import com.example.spring_online_work_project.entities.Application;
import com.example.spring_online_work_project.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class ApplicationController {
    @Autowired
    private ApplicationService applicationService;
    @GetMapping("/{userid}/allapplications")
    public List<Application> viewApplicationsPostedOfEachUser(@PathVariable Long userid){
        return this.applicationService.viewApplicationsOfEachUserPosted(userid);
    }
    @PostMapping("/{userid}/addapplication")
    public Application createApplicationByUser(@PathVariable Long userid,
                                               @RequestBody Application application){
        return this.applicationService.createApplicationByUser(userid,application);
    }
}
