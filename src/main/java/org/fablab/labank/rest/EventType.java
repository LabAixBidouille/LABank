package org.fablab.labank.rest;

import org.fablab.labank.dao.EventTypeDAO;
import org.fablab.labank.dto.EventTypeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by kprim on 03/03/2017.
 * Controleur REST permettant de gerer les webs services relatives aux EventType.
 */
@RestController
public class EventType {

    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    EventTypeDAO eventTypeDAO;

    /**
     * Methode permettant de retourner une liste de MachineDTO à l'URL spécifiée
     * @return List<EventTypeDTO> eventsType : liste de EventTypeDTO
     */
    @RequestMapping("/eventstype")
    public List<EventTypeDTO> query(){
        return (List<EventTypeDTO>) eventTypeDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet EventTypeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventTypeDTO à recuperer.
     * @return EventTypeDTO eventType : objet EventTypeDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/eventsType/{id}")
    public EventTypeDTO query(@PathVariable Long id){
        return eventTypeDAO.findOne(id);
    }
}
