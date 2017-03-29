package org.fablab.labank.dao;

import org.fablab.labank.dto.ThemeDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Kandel HANAFI on 29/03/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux ThemeDTO.
 */
public interface ThemeDAO extends CrudRepository<ThemeDTO, Long> {
}
