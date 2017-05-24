package org.fablab.labank.rest;

import org.fablab.labank.dao.EventTypeDAO;
import org.fablab.labank.dto.EventTypeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public List<EventTypeDTO> getAllEventType(){
        return (List<EventTypeDTO>) eventTypeDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet EventTypeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventTypeDTO à recuperer.
     * @return EventTypeDTO eventType : objet EventTypeDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/eventsType/{id}")
    public EventTypeDTO getEventType(@PathVariable Long id){
        return eventTypeDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet EventTypeDTO.
     * @param eventType : objet EventTypeDTO.
     * @return EventTypeDTO eventType : objet EventTypeDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/types", method = RequestMethod.POST)
    public EventTypeDTO save(@RequestBody EventTypeDTO eventType){
        EventTypeDTO et = null;
        try {
            et = this.eventTypeDAO.save(eventType);
        }catch(Exception e){
            e.printStackTrace();
        }
        return et;
    }

    /**
     * Methode permettant de mettre à jour l'objet EventTypeDTO passé en parametre de la requete HTTP.
     * @param eventType : objet EventThemeDTO.
     * @return EventTypeDTO eventType : objet EventTypeDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/types", method = RequestMethod.PUT)
    public EventTypeDTO update(@RequestBody EventTypeDTO eventType){
        EventTypeDTO et = null;
        try {
            et = this.eventTypeDAO.save(eventType);
        }catch(Exception e){
            e.printStackTrace();
        }
        return et;
    }

    /**
     * Methode permettant de supprimer l'objet EventTypeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventTypeDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/events/types/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.eventTypeDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
