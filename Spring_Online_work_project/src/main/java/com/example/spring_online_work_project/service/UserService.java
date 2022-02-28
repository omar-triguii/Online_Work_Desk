package com.example.spring_online_work_project.service;

import com.example.spring_online_work_project.Dto.UserDto;
import com.example.spring_online_work_project.entities.UserEntity;
import com.example.spring_online_work_project.repositories.UserRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepo userRepo;

    public UserEntity findByEmail(String email){
        return this.userRepo.findByEmail(email);
    }
    public UserEntity saveUser(UserEntity userEntity) {
        //RoleEntity userRole = roleEntityRepository.findByName("ROLE_USER");
        //userEntity.setRoleEntity(userRole);
        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        return userRepo.save(userEntity);
    }
    public UserEntity updateUser(UserEntity userEntity){
        return this.userRepo.save(userEntity);
    }

    public List<UserEntity> getusers(){
        return userRepo.findAll();
    }
    public UserEntity findByLoginAndPassword(String email,String password){
        UserEntity user=findByEmail(email);
        if (user!=null){
            if(passwordEncoder.matches(password,user.getPassword())){
                return user;
            }
        }
        return null;
    }
    public UserEntity omar(String email){
        List<UserEntity> users=this.userRepo.findAll();
        for (int i=0;i<users.size();i++){
            if (users.get(i).getEmail().equals(email)){
                return users.get(i);
            }
        }
       return null;

    }
    public String trigui(String email){
        List<UserEntity> users=this.userRepo.findAll();
        for (int i=0;i<users.size();i++){
            if (users.get(i).getEmail().equals(email)){
                return users.get(i).getFirstName() +"  "+ users.get(i).getLastName();
            }
        }
        return "";

    }

    public List<UserDto> getAllUsers() {
        List<UserDto> userDtos = new ArrayList<>();
        List<UserEntity> userEntities = userRepo.findAll();
        userEntities.stream().forEach(product -> {
            UserDto userDto = mapEntityToDto(product);
            userDtos.add(userDto);
        });
        return userDtos;
    }
    @Autowired
    private ModelMapper modelMapper;

    private UserDto mapEntityToDto(UserEntity user) {
        UserDto userDto = modelMapper.map(user, UserDto.class);

        return userDto;
    }



    private UserEntity mapDtoToEntity(UserDto userDto) throws ParseException {
        UserEntity user = modelMapper.map(userDto, UserEntity.class);
        return user;
    }

    @Transactional

    public UserDto updateUser(Long id, UserDto userDto) throws ParseException {
        Optional<UserEntity> prd = userRepo.findById(id);
        UserEntity prd1=mapDtoToEntity(userDto);
        prd.get().setFirstName(prd1.getFirstName());
        prd.get().setLastName(prd1.getLastName());
        prd.get().setPhoneNumber(prd1.getPhoneNumber());
        prd.get().setAddress(prd1.getAddress());
        UserEntity user = userRepo.save(prd.get());
        return mapEntityToDto(user);
    }

    public void save(String image, String firstName, String lastName, String phoneNumber, String adress, String email, String password) throws IOException
    {
        UserEntity user=new UserEntity();
        user.setEmail(email);
        user.setAddress(adress);
        user.setFirstName(firstName);
        user.setPassword(passwordEncoder.encode(password));
        user.setProfileImage(image);
        user.setPhoneNumber(phoneNumber);
        user.setLastName(lastName);

        this.userRepo.save(user);
    }

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
    public UserEntity getUserById(Long userId) {
        return userRepo.getById(userId);
    }



}