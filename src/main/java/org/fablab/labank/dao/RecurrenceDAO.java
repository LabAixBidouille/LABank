package org.fablab.labank.dao;

import org.fablab.labank.dto.EventTypeDTO;
import org.fablab.labank.dto.RecurrenceDTO;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by kprim on 02/03/2017.
 */
public interface RecurrenceDAO extends CrudRepository<RecurrenceDTO, Long> {

        /**
         * Return the recurrence type having the passed id of null if the recurrence type is not found.
         *
         * @param id the recurrence type id.
         */
        public EventTypeDTO findByIdRecurrence (Long id);
}
