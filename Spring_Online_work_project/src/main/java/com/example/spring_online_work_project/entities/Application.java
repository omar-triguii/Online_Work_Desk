package com.example.spring_online_work_project.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;


import javax.persistence.*;

@Entity
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long applicationId;
    private String Description;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "applicationOwner")
    private UserEntity applicationOwner;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "JobApplication")
    private Job job;

    public Job getJob() {
        return job;
    }

    public void setJob(Job job) {
        this.job = job;
    }

    public Long getApplicationId() {
        return applicationId;
    }

    public void setApplicationId(Long applicationId) {
        this.applicationId = applicationId;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
//@JsonIgnore
    public UserEntity getApplicationOwner() {
        return applicationOwner;
    }

    public void setApplicationOwner(UserEntity applicationOwner) {
        this.applicationOwner = applicationOwner;
    }
}
