package com.example.spring_online_work_project.controllers.authController;

import com.example.spring_online_work_project.config.jwt.JwtProvider;
import com.example.spring_online_work_project.entities.UserEntity;
import com.example.spring_online_work_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("user")
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private JwtProvider jwtProvider;


    //@Autowired
    //private RoleRepository roleRepository;
    @PostMapping("/register")
    public String registerUser(@RequestBody  RegistrationRequest registrationRequest) {
        UserEntity u = new UserEntity();
        if (userService.findByEmail(registrationRequest.getEmail())!= null){
            return "this username already in use";
        }
        else{
            u.setPassword(registrationRequest.getPassword());
            u.setAddress(registrationRequest.getAddress());
            u.setLastName(registrationRequest.getLastName());
            u.setFirstName(registrationRequest.getFirstName());
            u.setPhoneNumber(registrationRequest.getPhoneNumber());
            u.setEmail(registrationRequest.getEmail());
            //u.setRoleentity(this.roleRepository.getOne(1L));
          // u.setRoleentity(registrationRequest.getRoleId());
            //if (u.getRoleEntity().getId()==2){
            userService.saveUser(u);
            //}

            return "OK";}
    }

    @PostMapping("/auth")
    public AuthResponse auth(@RequestBody AuthRequest request) {
        UserEntity userEntity = userService.findByLoginAndPassword(request.getEmail(), request.getPassword());
        String token = jwtProvider.generateToken(userEntity.getEmail());

        return new AuthResponse(token);
    }
    //de moi
    @RequestMapping(value="/logout", method= RequestMethod.GET)
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null){
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "user has been logged out";
    }
}
