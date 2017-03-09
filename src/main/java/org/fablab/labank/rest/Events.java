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

    @RequestMapping("/eventslist/{id}")
    public List<EventDTO> query(@PathVariable Integer id){
        if(id == 0) {
            return (List<EventDTO>) eventDAO.findAll();
        }
        else {
            return eventDAO.findByIdEventType(Long.valueOf(id));
        }
    }

    @RequestMapping(value = "/events/{id}", method = RequestMethod.PUT)
    public EventDTO update(@RequestBody @Valid EventDTO eventDTO) {
        return eventDAO.save(eventDTO);
    }

    @RequestMapping(value = "/events/{id}")
    public EventDTO query(@PathVariable Long id){
        return eventDAO.findOne(id);
    }
}
