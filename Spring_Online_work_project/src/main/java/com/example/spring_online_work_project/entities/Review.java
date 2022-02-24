package com.example.spring_online_work_project.entities;

import javax.persistence.*;

@Entity
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    private String Title;
    private String Description;
    private int Rating;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ratingUser")
    private UserEntity user;
}
