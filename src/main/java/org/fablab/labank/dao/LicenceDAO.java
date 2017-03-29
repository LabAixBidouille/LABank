package org.fablab.labank.dao;

import org.fablab.labank.dto.LicenceDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Kandel HANAFI on 29/03/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux LicenceDTO.
 */
public interface LicenceDAO extends CrudRepository<LicenceDTO, Long> {
}
