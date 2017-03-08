package org.fablab.labank.service;

import org.fablab.labank.configuration.security.SecurityConfiguration;
import org.fablab.labank.configuration.security.SecurityUser;
import org.fablab.labank.configuration.security.hmac.*;
import org.fablab.labank.dao.UserDAO;
import org.fablab.labank.dto.LoginDTO;
import org.fablab.labank.dto.UserDTO;
import org.fablab.labank.dto.UserDTO;
import org.fablab.labank.utils.Ehcache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

/**
 * Authentication service
 * Created by kprim on 02/01/2017.
 */
@Service
public class AuthenticationService {

    public static final String JWT_APP_COOKIE = "hmac-app-jwt";
    public static final String CSRF_CLAIM_HEADER = "X-HMAC-CSRF";
    public static final String JWT_CLAIM_LOGIN = "login";

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    /**
     * Authenticate a user in Spring Security
     * The following headers are set in the response:
     * - X-TokenAccess: JWT
     * - X-Secret: Generated secret in base64 using SHA-256 algorithm
     * - WWW-Authenticate: Used algorithm to encode secret
     * The authenticated user in set ine the Spring Security context
     * The generated secret is stored in a static list for every user
     * @param loginDTO credentials
     * @param response http response
     * @return UserDTO instance
     * @throws HmacException
     */
    public UserDTO authenticate(LoginDTO loginDTO, HttpServletResponse response) throws HmacException {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(loginDTO.getLogin(),loginDTO.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        //Retrieve security user after authentication
        SecurityUser securityUser = (SecurityUser) userDetailsService.loadUserByUsername(loginDTO.getLogin());

        //Parse Granted authorities to a list of string authorities
        List<String> authorities = new ArrayList<>();
        for(GrantedAuthority authority : securityUser.getAuthorities()){
            authorities.add(authority.getAuthority());
        }

        //Get Hmac signed token
        String csrfId = UUID.randomUUID().toString();
        Map<String,String> customClaims = new HashMap<>();
        customClaims.put(HmacSigner.ENCODING_CLAIM_PROPERTY, HmacUtils.HMAC_SHA_256);
        customClaims.put(JWT_CLAIM_LOGIN, loginDTO.getLogin());
        customClaims.put(CSRF_CLAIM_HEADER, csrfId);

        //Generate a random secret
        String privateSecret = HmacSigner.generateSecret();
        String publicSecret = HmacSigner.generateSecret();

        // Jwt is generated using the private key
        HmacToken hmacToken = HmacSigner.getSignedToken(privateSecret,String.valueOf(securityUser.getId()), HmacSecurityFilter.JWT_TTL,customClaims);

        /*
        for(UserDTOOLD userDTO : MockUsers.getUsers()){
            if(userDTO.getId().equals(securityUser.getId())){
                //Store in cache both private an public secrets
                userDTO.setPublicSecret(publicSecret);
                userDTO.setPrivateSecret(privateSecret);
            }
        }
        */

        //Store in cache both private an public secrets
        Ehcache.getInstance().storePublicSecret(Long.valueOf(securityUser.getId()), publicSecret);
        Ehcache.getInstance().storePrivateSecret(Long.valueOf(securityUser.getId()), privateSecret);


        // Add jwt cookie
        Cookie jwtCookie = new Cookie(JWT_APP_COOKIE,hmacToken.getJwt());
        jwtCookie.setPath("/");
        jwtCookie.setMaxAge(20*60);
        //Cookie cannot be accessed via JavaScript
        jwtCookie.setHttpOnly(true);

        // Set public secret and encoding in headers
        response.setHeader(HmacUtils.X_SECRET, publicSecret);
        response.setHeader(HttpHeaders.WWW_AUTHENTICATE, HmacUtils.HMAC_SHA_256);
        response.setHeader(CSRF_CLAIM_HEADER, csrfId);

        //Set JWT as a cookie
        response.addCookie(jwtCookie);

        /*
        UserDTOOLD userDTO = new UserDTOOLD();
        //UserDTO userDTO = new UserDTO();
        userDTO.setId(securityUser.getId());
        userDTO.setLogin(securityUser.getUsername());
        userDTO.setAuthorities(authorities);
        //userDTO.setProfile(securityUser.getProfile());
        */

        // TODO  return authenticated user here.
        UserDTO userDTO = new UserDTO(securityUser.getId());
        userDTO.setPseudonym(securityUser.getUsername());
        userDTO.setAuthorities(authorities);
        userDTO.setProfile(securityUser.getProfile());
        return userDTO;
    }

    /**
     * Logout a user
     * - Clear the Spring Security context
     * - Remove the stored UserDTOOLD secret
     */
    public void logout(){
        if(SecurityContextHolder.getContext().getAuthentication() != null
                && SecurityContextHolder.getContext().getAuthentication().isAuthenticated())
        {
            SecurityUser securityUser = (SecurityUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

            /*
            UserDTOOLD userDTO = MockUsers.findById(securityUser.getId());
            if(userDTO != null){
                userDTO.setPublicSecret(null);
            }
            */

            // Destroy cache
            Ehcache.getInstance().closeCache(Long.valueOf(securityUser.getId()));
        }
    }

    /**
     * Authentication for every request
     * - Triggered by every http request except the authentication
     * Set the authenticated user in the Spring Security context
     * @param username username
     */
    public void tokenAuthentication(String username){
        UserDetails details = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(details, details.getPassword(), details.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authToken);
    }
}
