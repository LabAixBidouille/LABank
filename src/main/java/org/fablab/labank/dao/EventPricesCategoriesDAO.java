package org.fablab.labank.dao;

import org.fablab.labank.dto.EventPricesCategoriesDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Kandel on 22/06/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux EventPricesCategoriesDTO.
 */
public interface EventPricesCategoriesDAO extends CrudRepository<EventPricesCategoriesDTO,Long>{
}
