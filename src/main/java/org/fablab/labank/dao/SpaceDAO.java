package org.fablab.labank.dao;

import org.fablab.labank.dto.SpaceDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Kandel on 10/05/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux SpaceDTO.
 */
public interface SpaceDAO extends CrudRepository<SpaceDTO, Long> {


}
