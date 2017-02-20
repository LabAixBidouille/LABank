package org.fablab.labank.rest;

import org.fablab.labank.dao.ProfileDAO;
import org.fablab.labank.dao.UserDAO;
import org.fablab.labank.dto.Profile;
import org.fablab.labank.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

/**
 * Users resource
 * Created by kprim on 02/01/2017.
 */
@RestController
@RequestMapping(value = "/api")
public class Users {

    @Autowired
    UserDAO userDao;

    @Autowired
    ProfileDAO profileDAO;

    @RequestMapping("/users")
    public List<UserDTO> query(){
        return (List<UserDTO>) userDao.findAll();
        //return MockUsers.getUsers();
    }

    @RequestMapping("/users/{id}")
    public UserDTO query(@PathVariable Integer id){
        return userDao.findById(Long.valueOf(id));
        //return MockUsers.findById(id);
    }

    @RequestMapping(value = "/users/{id}", method = RequestMethod.PUT)
    public UserDTO update(@RequestBody @Valid UserDTO userDTO){
        return userDao.save(userDTO);
        //return MockUsers.update(userDTO);
    }

    @RequestMapping("/users/profiles")
    public List<String> getProfiles(){
        List<String> profiles = new ArrayList<>();
        for(Profile profile: profileDAO.findAll()){
            profiles.add(profile.getProfile());
        }
        return profiles;
    }
}
