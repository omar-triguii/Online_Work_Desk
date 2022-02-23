package com.example.spring_online_work_project.service;

import com.example.spring_online_work_project.Dto.JobDto;
import com.example.spring_online_work_project.entities.Job;
import com.example.spring_online_work_project.entities.UserEntity;
import com.example.spring_online_work_project.enumeration.Status;
import com.example.spring_online_work_project.repositories.JobRepo;
import com.example.spring_online_work_project.repositories.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@Service
public class JobService {
    @Autowired
    private JobRepo jobRepo;


    public List<JobDto> getAllJobs() {
        List<JobDto> jobDtos = new ArrayList<>();
        List<Job> jobs = jobRepo.findAll();
        jobs.stream().forEach(job -> {
            JobDto jobDto = mapEntityToDto(job);
            jobDtos.add(jobDto);
        });
        return jobDtos;
    }
    @Autowired
    private ModelMapper modelMapper;

    private JobDto mapEntityToDto(Job job) {
        JobDto jobDto = modelMapper.map(job, JobDto.class);

        return jobDto;
    }



    private Job mapDtoToEntity(JobDto jobDto) throws ParseException {
        Job job = modelMapper.map(jobDto, Job.class);
        return job;
    }
    @Autowired
    private UserRepo userRepo;
    public void addJobRequest(MultipartFile jobImageUrl, String Description, int Price,
                              int estimatedDuration, String Industry, Status Status,
                              String Title,Long userId) throws IOException {
        UserEntity user=this.userRepo.getById(userId);
        Job jobRequest = new Job();
        jobRequest.setJobImageUrl(compressImage(jobImageUrl.getBytes()));
        jobRequest.setDescription(Description);
        jobRequest.setEstimatedDuration(estimatedDuration);
        jobRequest.setIndustry(Industry);
        jobRequest.setPrice(Price);
      //  jobRequest.setStartDate(startDate);
        jobRequest.setStatus(Status);
        jobRequest.setTitle(Title);
        jobRequest.setOwner(user);
        this.jobRepo.save(jobRequest);
    }
    public List<Job> JobsPostedByUser(Long userId){
        List<Job> result = new ArrayList<>() ;
        List<Job> AllJobs = this.jobRepo.findAll();
        for (int i=0;i<AllJobs.size();i++){
           // Long l= new Long(i);
            if (AllJobs.get(i).getOwner().getUserId()==userId){
                result.add(AllJobs.get(i));
            }
        }
        return result;
    }
//Methode to approve the job for someone



    private byte[] decompressImage(byte[] data)
    {
        Inflater inflater=new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream=new ByteArrayOutputStream(data.length);
        byte[] buffer=new byte[1024];
        try {
            while(!inflater.finished())
            {
                int count=inflater.inflate(buffer);
                outputStream.write(buffer,0,count);
            }
            outputStream.close();
        }
        catch (IOException ex) {
        }
        catch(DataFormatException ex)
        {

        }
        return outputStream.toByteArray();
    }
    private byte[] compressImage(byte[] data)
    {
        Deflater deflater=new Deflater();
        deflater.setInput(data);
        deflater.finish();
        ByteArrayOutputStream outputStream=new ByteArrayOutputStream(data.length);
        byte[] buffer=new byte[1024];
        try {
            while(!deflater.finished())
            {
                int count=deflater.deflate(buffer);
                outputStream.write(buffer,0,count);
            }
            outputStream.close();
        }
        catch (IOException ex) {
        }
        return outputStream.toByteArray();
    }


}
