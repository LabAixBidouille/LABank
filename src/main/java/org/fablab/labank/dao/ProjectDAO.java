package org.fablab.labank.dao;

import org.fablab.labank.dto.ProjectDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Kandel HANAFI on 29/03/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux ProjectDTO.
 */
public interface ProjectDAO extends CrudRepository<ProjectDTO, Long> {

}
