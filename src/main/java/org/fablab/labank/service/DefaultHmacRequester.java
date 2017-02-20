package org.fablab.labank.service;

import org.fablab.labank.configuration.security.hmac.HmacRequester;
import org.fablab.labank.utils.Ehcache;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

/**
 * Hmac Requester service
 * Created by kprim on 02/01/2017.
 */
@Service
public class DefaultHmacRequester implements HmacRequester{

    @Override
    public Boolean canVerify(HttpServletRequest request) {
        return request.getRequestURI().contains("/api") && !request.getRequestURI().contains("/api/authenticate");
    }

    @Override
    public String getPublicSecret(String iss) {
        return Ehcache.getInstance().getPublicSecret(Long.valueOf(iss));
    }
}
