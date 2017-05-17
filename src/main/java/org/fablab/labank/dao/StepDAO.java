package org.fablab.labank.dao;

import org.fablab.labank.dto.StepDTO;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Kandel HANAFI on 30/03/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux StepDTO.
 */
public interface StepDAO extends CrudRepository<StepDTO, Long> {
    //public List<StepDTO> findByIdProject(Long idProject);
}
