package com.example.spring_online_work_project.service;

import com.example.spring_online_work_project.entities.Application;
import com.example.spring_online_work_project.entities.Job;
import com.example.spring_online_work_project.repositories.ApplicationRepo;
import com.example.spring_online_work_project.repositories.JobRepo;
import com.example.spring_online_work_project.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepo applicationRepo;

    public List<Application> viewApplicationsOfEachUserPosted(Long userId) {
        List<Application> result = new ArrayList<>();
        List<Application> allApplications = this.applicationRepo.findAll();
        for (int i = 0; i < allApplications.size(); i++) {
            // Long l= new Long(i);
            if (allApplications.get(i).getApplicationOwner().getUserId() == userId) {
                result.add(allApplications.get(i));
            }
        }
        return result;
    }

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private JobRepo jobRepo;

    public Application createApplicationByUser(Long userId, Long jobId, Application application) {
        application.setApplicationOwner(this.userRepo.getById(userId));
        application.setJob(this.jobRepo.getById(jobId));
        return this.applicationRepo.save(application);

    }

    public List<Application> getall() {
        return this.applicationRepo.findAll();
    }

    public List<Application> seeapplicationsbyotheruser(Long userId) {
        List<Application> allAppliacations = this.applicationRepo.findAll();
        List<Application> result = new ArrayList<>();
        List<Job> allJobs = this.jobRepo.findAll();
        for (int i = 0; i < allAppliacations.size(); i++) {

            if (allAppliacations.get(i).getJob().getOwner().getUserId() == userId) {
                result.add(allAppliacations.get(i));
            }

        }
        return result;
    }

    public List<Application> getapplicationsbyjob(Long jobId) {
        List<Application> allapp = this.applicationRepo.findAll();
        List<Application> result = new ArrayList<>();
        for (int i = 0; i < allapp.size(); i++) {
            if (allapp.get(i).getJob().getJobId() == jobId) {
                result.add(allapp.get(i));
            }
        }
        return result;
    }
}
