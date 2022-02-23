package com.example.spring_online_work_project.config;



import com.example.spring_online_work_project.entities.UserEntity;
import com.example.spring_online_work_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserService userService;

    @Override
    public CustomUserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity user = userService.findByEmail(email);
        return CustomUserDetails.fromUserEntityToCustomUserDetails(user);
    }
}
