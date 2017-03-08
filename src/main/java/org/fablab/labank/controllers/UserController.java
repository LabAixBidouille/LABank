package org.fablab.labank.controllers;


import org.fablab.labank.dao.UserDAO;
import org.fablab.labank.dto.GroupDTO;
import org.fablab.labank.dto.Profile;
import org.fablab.labank.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;


/**
 * A class to manage interactions with the database using the UserDao class.
 *
 * Created by kprim on 20/01/2017.
 */
@Controller
public class UserController {
    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    /**
     * /create  --> Create a new user and save it in the database.
     *
     * @param email User's email
     * @param name User's name
     * @return A string describing if the user is succesfully created or not.
     */
    @RequestMapping("/create")
    @ResponseBody
    public String create(char sex, String pseudonym, String password, String email, String name, String firstname, Date dateOfBirth, String address, String phoneNumber, String website, String occupation, String interests, GroupDTO group, Profile profile, String avatar) {
        UserDTO user = null;
        try {
            user = new UserDTO(sex, pseudonym, password, email, name, firstname, dateOfBirth, address, phoneNumber, website, occupation, interests, group, profile, avatar);
            userDao.save(user);
        }
        catch (Exception ex) {
            return "Error creating the user: " + ex.toString();
        }
        return "User succesfully created! (id = " + user.getId() + ")";
    }

    /**
     * /delete  --> Delete the user having the passed id.
     *
     * @param id The id of the user to delete
     * @return A string describing if the user is succesfully deleted or not.
     */
    @RequestMapping("/delete")
    @ResponseBody
    public String delete(long id) {
        try {
            UserDTO user = new UserDTO(id);
            userDao.delete(user);
        }
        catch (Exception ex) {
            return "Error deleting the user: " + ex.toString();
        }
        return "User succesfully deleted!";
    }

    /**
     * /get-by-email  --> Return the id for the user having the passed email.
     *
     * @param email The email to search in the database.
     * @return The user id or a message error if the user is not found.
     */
    @RequestMapping("/get-by-email")
    @ResponseBody
    public String getByEmail(String email) {
        String userId;
        try {
            UserDTO user = userDao.findByEmail(email);
            userId = String.valueOf(user.getId());
        }
        catch (Exception ex) {
            return "User not found";
        }
        return "The user id is: " + userId;
    }

    /**
     * /get-by-id  --> Return the user having the passed id.
     *
     * @param id The id to search in the database.
     * @return The user or a message error if the user is not found.
     */
    @RequestMapping("/get-by-id")
    @ResponseBody
    public UserDTO getById(Integer id) {
        String userId;
        UserDTO user = null;
        try {
            // user = userDao.findById(id);
            user = null;
            userId = String.valueOf(user.getId());
        }
        catch (Exception ex) {
            return null;
        }
        return user;
    }

    /**
     * /update  --> Update the email and the name for the user in the database
     * having the passed id.
     *
     * @param id The id for the user to update.
     * @param email The new email.
     * @param name The new name.
     * @return A string describing if the user is succesfully updated or not.
     */
    @RequestMapping("/update")
    @ResponseBody
    public String updateUser(long id, String email, String name) {
        try {
            UserDTO user = userDao.findOne(id);
            user.setEmail(email);
            user.setName(name);
            userDao.save(user);
        }
        catch (Exception ex) {
            return "Error updating the user: " + ex.toString();
        }
        return "User succesfully updated!";
    }

    // ------------------------
    // PRIVATE FIELDS
    // ------------------------

    @Autowired
    private UserDAO userDao;

}   // class UserController
