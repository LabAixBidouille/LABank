package org.fablab.labank.rest;

import org.fablab.labank.dao.AgeRangeDAO;
import org.fablab.labank.dto.AgeRangeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel on 24/05/2017.
 * Controleur REST permettant de gerer les webs services relatives aux AgeRange.
 */
@RestController
public class AgeRanges {
    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    AgeRangeDAO ageRangeDAO;

    /**
     * Methode permettant de retourner une liste de AgeRangeDTO à l'URL spécifiée
     * @return List<AgeRangeDTO> eventsTheme : liste de AgeRangeDTO
     */
    @RequestMapping("/ageRanges")
    public List<AgeRangeDTO> getAllAgeRange(){
        return (List<AgeRangeDTO>) ageRangeDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet AgeRangeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet EventTypeDTO à recuperer.
     * @return AgeRangeDTO ageRange : objet AgeRangeDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/ageRanges/{id}")
    public AgeRangeDTO getAgeRange(@PathVariable Long id){
        return ageRangeDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet AgeRangeDTO.
     * @param ageRange : objet AgeRangeDTO.
     * @return AgeRangeDTO ageRange : objet AgeRangeDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/ageRanges", method = RequestMethod.POST)
    public AgeRangeDTO save(@RequestBody AgeRangeDTO ageRange){
        AgeRangeDTO a = null;
        try {
            a = this.ageRangeDAO.save(ageRange);
        }catch(Exception e){
            e.printStackTrace();
        }
        return a;
    }

    /**
     * Methode permettant de mettre à jour l'objet AgeRangeDTO passé en parametre de la requete HTTP.
     * @param ageRange : objet AgeRangeDTO.
     * @return AgeRangeDTO eventTheme : objet AgeRangeDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/events/ageRanges", method = RequestMethod.PUT)
    public AgeRangeDTO update(@RequestBody AgeRangeDTO ageRange){
        AgeRangeDTO a = null;
        try {
            a = this.ageRangeDAO.save(ageRange);
        }catch(Exception e){
            e.printStackTrace();
        }
        return a;
    }

    /**
     * Methode permettant de supprimer l'objet AgeRangeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet AgeRangeDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/events/ageRanges/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.ageRangeDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
