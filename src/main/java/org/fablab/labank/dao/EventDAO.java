package org.fablab.labank.dao;

import org.fablab.labank.dto.EventDTO;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by kprim on 02/03/2017.
 */
public interface EventDAO extends CrudRepository<EventDTO, Long> {
    /**
     * Return the event having the passed id of null if the event is not found.
     *
     * @param IdEvent the event id.
     */
    public List<EventDTO> findByIdEvent (Long IdEvent);
}
