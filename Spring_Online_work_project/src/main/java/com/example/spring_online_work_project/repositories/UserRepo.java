package com.example.spring_online_work_project.repositories;

import com.example.spring_online_work_project.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserEntity,Long> {
    UserEntity findByEmail(String email);
}
