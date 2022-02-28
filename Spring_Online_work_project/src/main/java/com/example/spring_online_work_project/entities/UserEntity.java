package com.example.spring_online_work_project.entities;

import com.example.spring_online_work_project.enumeration.Gender;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @Column
    private String firstName;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String phoneNumber;
    @Column
    private String address;
    @Column
    private String profileImage;
    @Column
    private float rating;
    @Column
    private int nbRatings;
    @Column
    private String cvUrl;
    @Column
    private String employmentStatus;
    @Column
    private Date birthdate;
    @Column
    private Gender gender;

    @OneToMany(mappedBy = "owner",cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Job> jobsPosted = new HashSet<Job>();//jobs that he push them to the net

    @OneToMany(mappedBy = "applicationOwner",cascade=CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<Application> jobsTaken = new HashSet<Application>();

    //@OneToMany(mappedBy = "ownerPosted",cascade=CascadeType.ALL, fetch = FetchType.LAZY)
 //   private Set<Job> jobsPosted = new HashSet<Job>();
   // @Column
    //private byte[] urlcv;


    public Set<Job> getJobsPosted() {
        return jobsPosted;
    }

    public void setJobsPosted(Set<Job> jobsPosted) {
        this.jobsPosted = jobsPosted;
    }
@JsonIgnore
    public Set<Application> getJobsTaken() {
        return jobsTaken;
    }

    public void setJobsTaken(Set<Application> jobsTaken) {
        this.jobsTaken = jobsTaken;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getProfileImage() {
        return profileImage;
    }

    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }

    public float getRating() {
        return rating;
    }

    public void setRating(float rating) {
        this.rating = rating;
    }

    public int getNbRatings() {
        return nbRatings;
    }

    public void setNbRatings(int nbRatings) {
        this.nbRatings = nbRatings;
    }

    public String getCvUrl() {
        return cvUrl;
    }

    public void setCvUrl(String cvUrl) {
        this.cvUrl = cvUrl;
    }

    public String getEmploymentStatus() {
        return employmentStatus;
    }

    public void setEmploymentStatus(String employmentStatus) {
        this.employmentStatus = employmentStatus;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }
}
