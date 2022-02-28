package com.example.spring_online_work_project.controllers;

import com.example.spring_online_work_project.Dto.JobDto;
import com.example.spring_online_work_project.Dto.UserDto;
import com.example.spring_online_work_project.entities.Job;
import com.example.spring_online_work_project.enumeration.Status;
import com.example.spring_online_work_project.service.JobService;
import com.example.spring_online_work_project.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("user")
public class jobController {

    @Autowired
    private JobService jobService;

    @Autowired
    private UserService userService;

    @GetMapping("/getalljobs")
    public ResponseEntity<List<JobDto>> getalljobs() {
        List<JobDto> jobDtos = jobService.getAllJobs();
        return new ResponseEntity<>(jobDtos, HttpStatus.OK);
    }

    @PostMapping("/{userId}/addJob")
    public ResponseEntity<String> addJob(@RequestBody Job job, @PathVariable Long userId) {
        try {
            job.setOwner(this.userService.getUserById(userId));
            this.jobService.addJob(job);
            return ResponseEntity.status(HttpStatus.OK).build();

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{userId}/jobsposted")
    public List<Job> jobsPostedByUser(@PathVariable Long userId) {
        return this.jobService.JobsPostedByUser(userId);
    }
}
