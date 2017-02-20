package org.fablab.labank.utils;

import org.ehcache.Cache;
import org.ehcache.CacheManager;
import org.ehcache.config.builders.CacheConfigurationBuilder;
import org.ehcache.config.builders.CacheManagerBuilder;
import org.ehcache.config.builders.ResourcePoolsBuilder;

/**
 * Created by kprim on 10/02/2017.
 */
public final class Ehcache {

    private static Ehcache holder;
    private CacheManager cacheManager;
    private Cache<Long, String> publicSecretCache;
    private Cache<Long, String> privateSecretCache;

    private Ehcache() {
        cacheManager = CacheManagerBuilder.newCacheManagerBuilder()
                .withCache("preConfigured",
                        CacheConfigurationBuilder.newCacheConfigurationBuilder(Long.class, String.class,
                                ResourcePoolsBuilder.heap(100))
                                .build())
                .build(true);

        Cache<Long, String> preConfigured
                = cacheManager.getCache("preConfigured", Long.class, String.class);

        privateSecretCache = cacheManager.createCache("privateSecretCache",
                CacheConfigurationBuilder.newCacheConfigurationBuilder(Long.class, String.class,
                        ResourcePoolsBuilder.heap(100)).build());

        publicSecretCache = cacheManager.createCache("publicSecretCache",
                CacheConfigurationBuilder.newCacheConfigurationBuilder(Long.class, String.class,
                        ResourcePoolsBuilder.heap(100)).build());

    }

    public static Ehcache getInstance(){
        if (holder == null){
            synchronized (Ehcache.class) {
                holder = new Ehcache();
            }
        }
        return holder;
    }

    public void storePrivateSecret(Long key, String value){
        privateSecretCache.put(key, value);
    }

    public String getPrivateSecret(Long key){
        return this.privateSecretCache.get(key);
    }

    public void storePublicSecret(Long key, String value){
        publicSecretCache.put(key, value);
    }

    public String getPublicSecret(Long key){
        return this.publicSecretCache.get(key);
    }

    public void closeCache(Long id) {
        publicSecretCache.remove(id);
        privateSecretCache.remove(id);
        //cacheManager.removeCache("privateSecretCache");
        //cacheManager.removeCache("publicSecretCache");
        //cacheManager.close();
    }
}
