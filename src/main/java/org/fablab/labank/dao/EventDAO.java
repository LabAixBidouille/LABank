package org.fablab.labank.dao;

import org.fablab.labank.dto.EventDTO;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by kprim on 02/03/2017.
 * Interface DAO permettant de gerer les transactions de données relatives aux EventDTO.
 */
public interface EventDAO extends CrudRepository<EventDTO, Long> {
    /**
     * Return the event having the passed id of null if the event is not found.
     *
     * @param IdEvent the event id.
     */
    public List<EventDTO> findByIdEvent (Long IdEvent);

    public List<EventDTO> findByIdEventType (Long idEventType);

    public List<EventDTO> findByIdEventTheme (Long IdEventTheme);

    public  List<EventDTO> findByIdAgeRange(Long IdAgeRange);

    public  List<EventDTO> findByIdEventThemeAndIdAgeRange(Long IdEventTheme, Long IdAgeRange);

}
