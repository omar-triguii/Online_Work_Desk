package com.example.spring_online_work_project.Dto;

import com.example.spring_online_work_project.entities.Job;
import com.example.spring_online_work_project.entities.UserEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
@Getter
@Setter
public class ApplicationDto {
    private Long applicationId;
    private String Description;

    private UserEntity applicationOwner;

    private Job job;
}
