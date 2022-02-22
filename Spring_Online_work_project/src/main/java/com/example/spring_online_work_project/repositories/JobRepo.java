package com.example.spring_online_work_project.repositories;

import com.example.spring_online_work_project.entities.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepo extends JpaRepository<Job,Long> {
}
