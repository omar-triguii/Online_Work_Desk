package com.example.spring_online_work_project.controllers.authController;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data

public class AuthResponse {

    public String token;

    public AuthResponse(String token) {
        this.token = token;
    }

}
