package com.example.spring_online_work_project.Dto;

import com.example.spring_online_work_project.entities.UserEntity;
import com.example.spring_online_work_project.enumeration.Status;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;
@Getter
@Setter
public class JobDto {
    private Long jobId;
    private String title;
    private String Description;
    private Date startDate;
    private int estimatedDuration;
    private int Price;
    private Status status;
    private String industry;
    private String jobImageUrl;
    private UserEntity owner;
}
