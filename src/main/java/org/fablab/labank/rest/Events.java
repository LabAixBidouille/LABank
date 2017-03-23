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

    @RequestMapping(value = "/events/{id}")
    public EventDTO query(@PathVariable Long id){
        return eventDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet EventDTO.
     * @param event : objet EventDTO.
     * @return EventDTO event : objet EventDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events", method = RequestMethod.POST)
    public EventDTO save(@RequestBody EventDTO event){
        EventDTO e = null;
        try {
            e = this.eventDAO.save(event);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return e;
    }

    /**
     * Methode permettant de mettre à jour l'objet EventDTO passé en parametre de la requete HTTP.
     * @param event : objet EventDTO.
     * @return EventDTO event : objet EventDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events", method = RequestMethod.PUT)
    public EventDTO update(@RequestBody EventDTO event){
        EventDTO e = null;
        try {
            e = this.eventDAO.save(event);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return e;
    }

    /**
     * Methode permettant de supprimer l'objet EventDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/events/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean msg = false;
        try {
            this.eventDAO.delete(id);
            msg = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return msg;
    }
}
