package org.fablab.labank.rest;

import org.fablab.labank.dao.MachineDAO;
import org.fablab.labank.dao.TrainingDAO;
import org.fablab.labank.dto.MachineDTO;
import org.fablab.labank.dto.TrainingDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel HANAFI on 06/03/2017.
 * Controleur REST permettant de gerer les webs services relatives aux Training.
 */
@RestController
public class Trainings {

    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    TrainingDAO trainingDAO;

    /**
     * Methode permettant de retourner une liste de TrainingDTO à l'URL spécifiée
     * @return List<TrainingDTO> trainings : liste de Training
     */
    @RequestMapping("/trainings")
    public List<TrainingDTO> query(){
        return (List<TrainingDTO>) trainingDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet TrainingDTO ayant l'id passé en parametre de l'URL.
     * @param id : id du Training à recuperer.
     * @return TrainingDTO training : objet TrainingDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/training/{id}")
    public TrainingDTO query(@PathVariable Long id){
        return this.trainingDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet TrainingDTO.
     * @param training : objet TrainingDTO.
     * @return TrainingDTO training : objet TraininDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/trainings", method = RequestMethod.POST)
    public TrainingDTO save(@RequestBody TrainingDTO training){
        TrainingDTO t = null;
        try {
            t = this.trainingDAO.save(training);
        }catch(Exception e){
            e.printStackTrace();
        }
        return t;
    }

    /**
     * Methode permettant de mettre à jour l'objet TrainingDTO passé en parametre de la requete HTTP.
     * @param training : objet TrainingDTO.
     * @return TrainingDTO training : objet TraininDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/trainings", method = RequestMethod.PUT)
    public TrainingDTO update(@RequestBody TrainingDTO training){
        TrainingDTO t = null;
        try {
            t = this.trainingDAO.save(training);
        }catch(Exception e){
            e.printStackTrace();
        }
        return t;
    }

    /**
     * Methode permettant de supprimer l'objet TrainingDTO ayant l'id passé en parametre de l'URL.
     * @param id : id du Training à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/trainings/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean msg = false;
        try {
            this.trainingDAO.delete(id);
            msg = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return msg;
    }
}
