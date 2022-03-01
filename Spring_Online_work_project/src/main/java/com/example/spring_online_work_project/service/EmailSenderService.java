package com.example.spring_online_work_project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailSenderService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendSimpleEmail(String toEmail,
                                String body,
                                String subject,
                                String cc) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom("khadamnisupcom@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);
        message.setCc(cc);

        mailSender.send(message);
        System.out.println("Mail Send...");
    }


}