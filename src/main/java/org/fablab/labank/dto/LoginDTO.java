package org.fablab.labank.dto;

import org.hibernate.validator.constraints.NotEmpty;

/**
 * Created by kprim on 02/01/2017.
 */
public class LoginDTO {

    @NotEmpty
    private String login;

    @NotEmpty
    private String password;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
