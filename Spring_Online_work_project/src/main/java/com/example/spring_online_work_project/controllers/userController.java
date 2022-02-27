package com.example.spring_online_work_project.controllers;

import com.example.spring_online_work_project.Dto.UserDto;
import com.example.spring_online_work_project.entities.UserEntity;
import com.example.spring_online_work_project.repositories.UserRepo;
import com.example.spring_online_work_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.text.ParseException;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("user")
public class userController {
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private UserService userService;


    @GetMapping("/getallusers")
    public ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> userDtos = userService.getAllUsers();
        return new ResponseEntity<>(userDtos, HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserDto> updateUser(@PathVariable(name = "id") Long id,
                                                    @RequestBody  UserDto userDto) throws ParseException {
        UserDto prd = userService.updateUser(id, userDto);
        return new ResponseEntity<>(prd, HttpStatus.CREATED);
    }


    @PostMapping("/add")
    public ResponseEntity<String> saveUser(@RequestParam("profileImage") MultipartFile profileImage, @RequestParam("FirstName") String firstName,
                                           @RequestParam("lastName") String lastName, @RequestParam("phoneNumber")String phoneNumber,
                                           @RequestParam("adress")String adress,
                                           @RequestParam("email") String email, @RequestParam("password") String password)
    {
        try {
            this.userService.save(profileImage, firstName,lastName,phoneNumber,adress, email, password);
            return ResponseEntity.status(HttpStatus.OK).build();

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    @GetMapping("/omar/{email}")
    public UserEntity getByEmail(@PathVariable(name = "email") String email){
        return this.userService.omar(email);

    }

    @GetMapping("/trigui/{email}")
    public String getname(@PathVariable(name = "email") String email){
        return this.userService.trigui(email);

    }

}
