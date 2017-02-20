package org.fablab.labank.service;

import org.fablab.labank.configuration.security.SecurityUser;
import org.fablab.labank.dao.ProfileDAO;
import org.fablab.labank.dao.UserDAO;
import org.fablab.labank.dto.Profile;
import org.fablab.labank.dto.UserDTO;
import org.fablab.labank.utils.Authorities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Hmac user details service
 * Created by kprim on 02/01/2017.
 */
@Component
public class HmacUserDetailsService implements UserDetailsService{

    private final UserDAO userDAO;

    private final ProfileDAO profileDAO;

    @Autowired
    public HmacUserDetailsService(UserDAO userDAO, ProfileDAO profileDAO) {
        this.userDAO = userDAO;
        this.profileDAO = profileDAO;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        // UserDTOOLD userDTO = MockUsers.findByUsername(username);
        UserDTO userDTO;

        String EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
                        + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

        Pattern pattern = Pattern.compile(EMAIL_PATTERN);

        Matcher matcher = pattern.matcher(username);

        if(matcher.matches()) {
            // Valid email address
             userDTO = userDAO.findByEmail(username);
            if (userDTO == null) {
                throw new UsernameNotFoundException("Email "+username+" not found");
            }
        }
        else {
            // invalid email address, the credential is a username
            userDTO = userDAO.findByPseudonym(username);
            if (userDTO == null) {
                throw new UsernameNotFoundException("Username "+username+" not found");
            }
        }

        Profile profile = profileDAO.findByIdProfile(userDTO.getIdProfile());

        List<GrantedAuthority> authorities = new ArrayList<>();
        if(profile != null){
            for(String authority : Authorities.getAuthoritiesList(profile.getProfile())){
                authorities.add(new SimpleGrantedAuthority(authority));
            }
        }

        // return new SecurityUser(userDTO.getId(),userDTO.getLogin(),userDTO.getPassword(),userDTO.getProfile(),authorities);
        return new SecurityUser((int)userDTO.getId(),username,userDTO.getPassword(),profile,authorities);
    }
}
