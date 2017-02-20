package org.fablab.labank.dao;

import org.fablab.labank.dto.UserDTO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by kprim on 20/01/2017.
 */
@Repository
public interface UserDAO extends CrudRepository<UserDTO, Long> {
    /**
     * Return the user having the passed email or null if no user is found.
     *
     * @param email the user email.
     */
    public UserDTO findByEmail(String email);

    /**
     * Return the user having the passed pseudonym or null if no user is found.
     *
     * @param pseudonym the user pseudonym.
     */
    public UserDTO findByPseudonym(String pseudonym);

    /**
     * Return the user having the passed id of null if no user is found.
     *
     * @param id the user id.
     */
    public UserDTO findById(Long id);

}
