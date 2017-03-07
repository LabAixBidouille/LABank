package org.fablab.labank.rest;

import org.fablab.labank.dao.EventTypeDAO;
import org.fablab.labank.dto.EventTypeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by kprim on 03/03/2017.
 */
@RestController
public class EventType {

    @Autowired
    EventTypeDAO eventTypeDAO;

    @RequestMapping("/events")
    public List<EventTypeDTO> query(){
        return (List<EventTypeDTO>) eventTypeDAO.findAll();
    }
}
