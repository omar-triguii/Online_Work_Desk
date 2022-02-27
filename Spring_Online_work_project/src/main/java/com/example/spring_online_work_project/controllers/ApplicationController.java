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
    //user posted a job request
    @GetMapping("/{userid}/allapplications")
    public List<Application> viewApplicationsPostedOfEachUser(@PathVariable Long userid){
        return this.applicationService.viewApplicationsOfEachUserPosted(userid);
    }
    //user with userid apply for job with jobid
    @PostMapping("/{userid}/{jobid}/addapplication")
    public Application createApplicationByUser(@PathVariable Long userid,
                                               @PathVariable Long jobid,
                                               @RequestBody Application application){
        return this.applicationService.createApplicationByUser(userid,jobid,application);
    }
    @GetMapping("getallapp")
    public List<Application> getallapplications(){
        return this.applicationService.getall();
    }
    //each user see the applications by other users to its request
    @GetMapping("/{userId}/seeapplicationsbyotheruser")
    public List<Application> seeapplicationsbyotheruser(@PathVariable Long userId){
        return this.applicationService.seeapplicationsbyotheruser(userId);
    }
    //user confirms an application

}
