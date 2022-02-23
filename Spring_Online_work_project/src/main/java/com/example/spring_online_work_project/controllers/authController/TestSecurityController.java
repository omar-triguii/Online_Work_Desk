package com.example.spring_online_work_project.controllers.authController;


import com.example.spring_online_work_project.entities.UserEntity;
import com.example.spring_online_work_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Collection;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestSecurityController {
    @Autowired
    private UserService userService;
    @GetMapping("/users")
    public List<UserEntity>getUsers(){
        return userService.getusers();
    }
    @GetMapping("/admin/get")
    public Collection<? extends GrantedAuthority> getAdmin(HttpServletRequest request) {
        Principal principal = request.getUserPrincipal();
        UserDetails userDetails =
                (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        //return userDetails.isAccountNonExpired();
        return userDetails.getAuthorities();
        //Principal principal = request.getUserPrincipal();
        //return "Hi admin"+ principal.getName();
        // return "Hi admin";
    }


    @GetMapping("getadmin/{email}")
    public UserEntity getadmin(@PathVariable String email){
        return this.userService.findByEmail(email);
    }

    @GetMapping("/user/get")
    public Collection<? extends GrantedAuthority> getUser(HttpServletRequest request) {
       /* String login =(String) request.getAttribute("login");
        return "Hi user "+login;*/
        Principal principal = request.getUserPrincipal();
        UserDetails userDetails =
                (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        //return userDetails.isAccountNonExpired();
        return userDetails.getAuthorities();

        //return "Hi user "+ principal.getName();
    }

    @GetMapping("/home")
    public  String home(){
        return "home";
    }
}
