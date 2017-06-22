package org.fablab.labank.rest;

import org.fablab.labank.dao.EventPricesCategoriesDAO;
import org.fablab.labank.dto.EventPricesCategoriesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel on 22/06/2017.
 * Controleur REST permettant de gerer les webs services relatives aux EventPricesCategories.
 */
@RestController
public class EventPricesCategories {

    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    EventPricesCategoriesDAO eventPricesCategoriesDAO;

    /**
     * Methode permettant de retourner une liste de EventPricesCategoriesDTO à l'URL spécifiée
     * @return List<EventPricesCategoriesDTO> eventPricesCategories : liste de EventPricesCategoriesDTO
     */
    @RequestMapping("/eventPricesCategories")
    public List<EventPricesCategoriesDTO> getAllEventPricesCategories(){
        System.out.println("C'est ok");
        return (List<EventPricesCategoriesDTO>) eventPricesCategoriesDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet EventPricesCategoriesDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventPricesCategoriesDTO à recuperer.
     * @return EventPricesCategoriesDTO eventPricesCategory : objet EventPricesCategoriesDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/eventPricesCategories/{id}")
    public EventPricesCategoriesDTO getEventPricesCategory(@PathVariable Long id){
        return eventPricesCategoriesDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet EventPricesCategoriesDTO.
     * @param eventPricesCategory : objet EventPricesCategoriesDTO.
     * @return EventPricesCategoriesDTO eventPricesCategory : objet EventPricesCategoriesDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/eventPricesCategories", method = RequestMethod.POST)
    public EventPricesCategoriesDTO save(@RequestBody EventPricesCategoriesDTO eventPricesCategory){
        EventPricesCategoriesDTO e = null;
        try {
            e = this.eventPricesCategoriesDAO.save(eventPricesCategory);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return e;
    }

    /**
     * Methode permettant de mettre à jour l'objet EventPricesCategoriesDTO passé en parametre de la requete HTTP.
     * @param eventPricesCategory : objet EventPricesCategoriesDTO.
     * @return EventPricesCategoriesDTO eventPricesCategory : objet EventPricesCategoriesDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/eventPricesCategories", method = RequestMethod.PUT)
    public EventPricesCategoriesDTO update(@RequestBody EventPricesCategoriesDTO eventPricesCategory){
        EventPricesCategoriesDTO e = null;
        try {
            e = this.eventPricesCategoriesDAO.save(eventPricesCategory);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return e;
    }

    /**
     * Methode permettant de supprimer l'objet EventPricesCategoriesDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventPricesCategoriesDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/events/eventPricesCategories/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.eventPricesCategoriesDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
