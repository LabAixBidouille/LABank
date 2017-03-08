package org.fablab.labank.rest;

import org.fablab.labank.dao.MachineDAO;
import org.fablab.labank.dao.TrainingDAO;
import org.fablab.labank.dto.MachineDTO;
import org.fablab.labank.dto.TrainingDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
     * Methode permettant de retourner une liste de Training à l'URL spécifiée
     * @return List<TrainingDTO> trainings : liste de Training
     */
    @RequestMapping("/trainings")
    public List<TrainingDTO> query(){
        return (List<TrainingDTO>) trainingDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet Training ayant l'id passé en parametre de l'URL.
     * @param id : id du Training à recuperer
     * @return TrainingDTO training : objet TrainingDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/training/{id}")
    public TrainingDTO query(@PathVariable Long id){
        return this.trainingDAO.findOne(id);
    }
}
