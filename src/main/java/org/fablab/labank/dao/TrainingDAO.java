package org.fablab.labank.dao;

import org.fablab.labank.dto.TrainingDTO;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Kandel HANAFI on 06/03/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux TrainingDTO.
 */
public interface TrainingDAO extends CrudRepository<TrainingDTO, Long> {

}
