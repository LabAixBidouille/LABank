package org.fablab.labank.configuration.security;

import org.fablab.labank.dto.Profile;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

/**
 * Security spring security user
 * Created by kprim on 02/01/2017.
 */
public class SecurityUser extends User{

    private Integer id;

    private Profile profile;

    public SecurityUser(String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
    }

    public SecurityUser(Integer id, String username, String password, Profile profile, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.id = id;
        this.profile = profile;
    }

    public Integer getId() {
        return id;
    }

    public Profile getProfile() {
        return profile;
    }
}
