package org.fablab.labank.rest;

import org.fablab.labank.dao.EventDAO;
import org.fablab.labank.dao.EventTypeDAO;
import org.fablab.labank.dto.EventDTO;
import org.fablab.labank.dto.MachineDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by kprim on 02/03/2017.
 */
@RestController
public class Events {

    @Autowired
    EventDAO eventDAO;

    @Autowired
    EventTypeDAO eventTypeDAO;

    @RequestMapping("/eventslist")
    public List<EventDTO> query(){
        return (List<EventDTO>) eventDAO.findAll();
    }

    @RequestMapping("/events/{id}")
    public EventDTO query(@PathVariable Integer id){
        return eventDAO.findByIdEvent(Long.valueOf(id));
    }

    @RequestMapping(value = "/events/{id}", method = RequestMethod.PUT)
    public EventDTO update(@RequestBody @Valid EventDTO eventDTO) {
        return eventDAO.save(eventDTO);
    }
}
