package org.fablab.labank.configuration.security.hmac;

/**
 * Hmac signer exception
 * Created by kprim on 02/01/2017.
 */
public class HmacException extends Exception{

    public HmacException(String message) {
        super(message);
    }

    public HmacException(String message, Throwable throwable) {
        super(message,throwable);
    }
}
