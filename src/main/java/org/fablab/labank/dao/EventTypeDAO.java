package org.fablab.labank.dao;

import org.fablab.labank.dto.EventTypeDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by kprim on 02/03/2017.
 */
public interface EventTypeDAO extends CrudRepository<EventTypeDTO, Long> {
    /**
     * Return the event type having the passed id of null if the event type is not found.
     *
     * @param id the event type id.
     */
    public EventTypeDTO findByIdEventType (Long id);
}
