package com.example.spring_online_work_project.Dto;

import com.example.spring_online_work_project.entities.Application;
import com.example.spring_online_work_project.entities.Job;
import com.example.spring_online_work_project.enumeration.Gender;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
@Getter
@Setter
public class UserDto {
    private Long userId;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String phoneNumber;

    private String address;

    private String profileImage;

    private float rating;

    private int nbRatings;

    private String cvUrl;

    private String employmentStatus;

    private Date birthdate;

    private Gender gender;


    private Set<Job> jobsPosted = new HashSet<Job>();


    private Set<Application> jobsTaken = new HashSet<Application>();

}
