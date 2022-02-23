package com.example.spring_online_work_project.controllers;

import com.example.spring_online_work_project.Dto.JobDto;
import com.example.spring_online_work_project.Dto.UserDto;
import com.example.spring_online_work_project.entities.Job;
import com.example.spring_online_work_project.enumeration.Status;
import com.example.spring_online_work_project.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("user")
public class jobController {

@Autowired
private JobService jobService;
    @GetMapping("/getalljobs")
    public ResponseEntity<List<JobDto>> getalljobs() {
        List<JobDto> jobDtos = jobService.getAllJobs();
        return new ResponseEntity<>(jobDtos, HttpStatus.OK);
    }
    @PostMapping("/{userId}/addJob")
    public ResponseEntity<String> addJob(@RequestParam("jobImageUrl") MultipartFile jobImageUrl, @RequestParam("Description") String Description,
                                         @RequestParam("Price") int Price, @RequestParam("estimatedDuration")int estimatedDuration,
                                         @RequestParam("Industry")String Industry,
                                        // @RequestParam("startDate") Date startDate,
                                         @RequestParam("Status") Status Status,
                                         @RequestParam("Title") String Title,@PathVariable Long userId)
    {
        try {
            this.jobService.addJobRequest(jobImageUrl,Description,Price,estimatedDuration,Industry,Status,Title,userId);
            return ResponseEntity.status(HttpStatus.OK).build();

        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @GetMapping("/{userId}/jobsposted")
    public List<Job> jobsPostedByUser(@PathVariable Long userId){
        return this.jobService.JobsPostedByUser(userId);
    }
}
