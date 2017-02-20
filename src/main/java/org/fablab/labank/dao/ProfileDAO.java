package org.fablab.labank.dao;

import org.fablab.labank.dto.Profile;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by kprim on 02/02/2017.
 */
@Repository
public interface ProfileDAO extends CrudRepository<Profile, Long> {

    /**
     * Return the user's Profile having the passed id or null if no profile is found.
     *
     * @param idProfile the user profile.
     */
    Profile findByIdProfile(Long idProfile);
}
