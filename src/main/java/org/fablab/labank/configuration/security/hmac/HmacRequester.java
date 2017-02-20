package org.fablab.labank.configuration.security.hmac;

import javax.servlet.http.HttpServletRequest;

/**
 * Hmac verification interface
 * Created by kprim on 02/01/2017.
 */
public interface HmacRequester {

    /**
     * Check if its possible to verify the request
     * @param request htp reqsuest
     * @return true if possible, false otherwise
     */
    Boolean canVerify(HttpServletRequest request);

    /**
     * Get the stored public secret (locally,remotely,cache,etc..)
     * @param iss issuer
     * @return secret key
     */
    String getPublicSecret(String iss);
}
