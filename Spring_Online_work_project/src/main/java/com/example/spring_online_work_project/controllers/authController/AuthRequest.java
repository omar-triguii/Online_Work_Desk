package com.example.spring_online_work_project.controllers.authController;

import lombok.Data;

@Data
public class AuthRequest {
    private String email;
    private String password;
}
