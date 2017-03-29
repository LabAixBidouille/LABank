package org.fablab.labank.dao;

import org.fablab.labank.dto.MaterialDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Kandel HANAFI on 29/03/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux MaterialDTO.
 */
public interface MaterialDAO extends CrudRepository<MaterialDTO, Long> {
}
