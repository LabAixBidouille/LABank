package org.fablab.labank.rest;

import org.fablab.labank.dao.EventThemeDAO;
import org.fablab.labank.dto.EventThemeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel on 24/05/2017.
 * Controleur REST permettant de gerer les webs services relatives aux EventTheme.
 */
@RestController
public class EventThemes {
    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    EventThemeDAO eventThemeDAO;

    /**
     * Methode permettant de retourner une liste de MachineDTO à l'URL spécifiée
     * @return List<EventThemeDTO> eventsTheme : liste de EventThemeDTO
     */
    @RequestMapping("/eventsThemes")
    public List<EventThemeDTO> getAllEventTheme(){
        return (List<EventThemeDTO>) eventThemeDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet EventThemeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventTypeDTO à recuperer.
     * @return EventThemeDTO eventTheme : objet EventThemeDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/eventsThemes/{id}")
    public EventThemeDTO getEventTheme(@PathVariable Long id){
        return eventThemeDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet EventThemeDTO.
     * @param eventTheme : objet EventThemeDTO.
     * @return EventThemeDTO eventTheme : objet EventThemeDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/themes", method = RequestMethod.POST)
    public EventThemeDTO save(@RequestBody EventThemeDTO eventTheme){
        EventThemeDTO et = null;
        try {
            et = this.eventThemeDAO.save(eventTheme);
        }catch(Exception e){
            e.printStackTrace();
        }
        return et;
    }

    /**
     * Methode permettant de mettre à jour l'objet EventThemeDTO passé en parametre de la requete HTTP.
     * @param eventTheme : objet EventThemeDTO.
     * @return EventThemeDTO eventTheme : objet EventThemeDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/themes", method = RequestMethod.PUT)
    public EventThemeDTO update(@RequestBody EventThemeDTO eventTheme){
        EventThemeDTO et = null;
        try {
            et = this.eventThemeDAO.save(eventTheme);
        }catch(Exception e){
            e.printStackTrace();
        }
        return et;
    }

    /**
     * Methode permettant de supprimer l'objet EventThemeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventThemeDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/events/themes/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.eventThemeDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
