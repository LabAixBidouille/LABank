package org.fablab.labank.dao;

import org.fablab.labank.dto.GroupDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Kandel on 22/05/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux GroupDTO.
 */
public interface GroupDAO extends CrudRepository<GroupDTO, Long> {
}
