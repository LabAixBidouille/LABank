package org.fablab.labank.dao;

import org.fablab.labank.dto.EventThemeDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Kandel on 24/05/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux EventThemeDTO.
 */
public interface EventThemeDAO extends CrudRepository<EventThemeDTO, Long> {
}
