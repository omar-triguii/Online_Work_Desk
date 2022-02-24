package com.example.spring_online_work_project.repositories;

import com.example.spring_online_work_project.entities.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepo extends JpaRepository<Review,Long> {
}
