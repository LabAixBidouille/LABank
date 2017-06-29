package org.fablab.labank.rest;

import org.fablab.labank.dao.PricesCategoriesDAO;
import org.fablab.labank.dto.PricesCategoriesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel on 22/06/2017.
 * Controleur REST permettant de gerer les webs services relatives aux PricesCategories.
 */
@RestController
public class PricesCategories {

    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    PricesCategoriesDAO pricesCategoriesDAO;

    /**
     * Methode permettant de retourner une liste de PricesCategoriesDTO à l'URL spécifiée
     * @return List<PricesCategoriesDTO> eventPricesCategories : liste de PricesCategoriesDTO
     */
    @RequestMapping("/pricesCategories")
    public List<PricesCategoriesDTO> getAllPricesCategories(){
        return (List<PricesCategoriesDTO>) pricesCategoriesDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet PricesCategoriesDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet PricesCategoriesDTO à recuperer.
     * @return PricesCategoriesDTO pricesCategory : objet PricesCategoriesDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/pricesCategories/{id}")
    public PricesCategoriesDTO getPricesCategory(@PathVariable Long id){
        return pricesCategoriesDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet PricesCategoriesDTO.
     * @param pricesCategory : objet PricesCategoriesDTO.
     * @return PricesCategoriesDTO pricesCategory : objet PricesCategoriesDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/pricesCategories", method = RequestMethod.POST)
    public PricesCategoriesDTO save(@RequestBody PricesCategoriesDTO pricesCategory){
        PricesCategoriesDTO p = null;
        try {
            p = this.pricesCategoriesDAO.save(pricesCategory);
        }catch(Exception e){
            e.printStackTrace();
        }
        return p;
    }

    /**
     * Methode permettant de mettre à jour l'objet PricesCategoriesDTO passé en parametre de la requete HTTP.
     * @param pricesCategory : objet PricesCategoriesDTO.
     * @return PricesCategoriesDTO pricesCategory : objet PricesCategoriesDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/pricesCategories", method = RequestMethod.PUT)
    public PricesCategoriesDTO update(@RequestBody PricesCategoriesDTO pricesCategory){
        PricesCategoriesDTO p = null;
        try {
            p = this.pricesCategoriesDAO.save(pricesCategory);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return p;
    }

    /**
     * Methode permettant de supprimer l'objet PricesCategoriesDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet PricesCategoriesDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/events/pricesCategories/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.pricesCategoriesDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
