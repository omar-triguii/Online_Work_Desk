package com.example.spring_online_work_project.repositories;

import com.example.spring_online_work_project.entities.Application;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepo extends JpaRepository<Application,Long> {
}
