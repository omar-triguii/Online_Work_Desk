package com.example.spring_online_work_project.controllers.authController;
import lombok.Data;

//import javax.validation.constraints.NotEmpty;

@Data
public class RegistrationRequest {

   // @NotEmpty

    private String email;

    //@NotEmpty
    private String password;
   // private Long roleId;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String address;
   }
