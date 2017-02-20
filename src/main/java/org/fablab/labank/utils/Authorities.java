package org.fablab.labank.utils;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by kprim on 02/02/2017.
 */
public class Authorities {

    private static Map<String,List<String>> authorities =  new HashMap(){{
        put("ADMIN", Arrays.asList("ROLE_ADMIN","ROLE_MANAGER","ROLE_USER"));
        put("USER",Arrays.asList("ROLE_USER"));
        put("MANAGER",Arrays.asList("ROLE_MANAGER","ROLE_USER"));
    }};

    /**
     * Find a authorities list by profile name
     * @param profile profile
     * @return a List<String> of authorities if found, null otherwise
     */
    public static List<String> getAuthoritiesList (String profile){
        return authorities.get(profile);
    }
}
