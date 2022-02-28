package com.example.spring_online_work_project;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

import javax.annotation.Resource;

import com.example.spring_online_work_project.config.FileStorageProperties;
import com.example.spring_online_work_project.service.FilesStorageService;

import org.modelmapper.ModelMapper;

@SpringBootApplication
public class SpringOnlineWorkProjectApplication implements CommandLineRunner{
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Resource
    FilesStorageService storageService;

    public static void main(String[] args) {
        SpringApplication.run(SpringOnlineWorkProjectApplication.class, args);
    }

    @Override
    public void run(String... arg) throws Exception {
        storageService.deleteAll();
        storageService.init();
    }
}
