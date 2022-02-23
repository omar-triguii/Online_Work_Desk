package com.example.spring_online_work_project.service;

import com.example.spring_online_work_project.entities.Application;
import com.example.spring_online_work_project.entities.Job;
import com.example.spring_online_work_project.repositories.ApplicationRepo;
import com.example.spring_online_work_project.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepo applicationRepo;
    public List<Application> viewApplicationsOfEachUserPosted(Long userId){
        List<Application> result = new ArrayList<>() ;
        List<Application> allApplications = this.applicationRepo.findAll();
        for (int i=0;i<allApplications.size();i++){
            // Long l= new Long(i);
            if (allApplications.get(i).getApplicationOwner().getUserId()==userId){
                result.add(allApplications.get(i));
            }
        }
        return result;
    }
    @Autowired
    private UserRepo userRepo;
    public Application createApplicationByUser(Long userId,Application application){
        application.setApplicationOwner(this.userRepo.getById(userId));
        return this.applicationRepo.save(application);

    }
}
