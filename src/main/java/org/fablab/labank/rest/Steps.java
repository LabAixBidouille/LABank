package org.fablab.labank.rest;

import org.fablab.labank.dao.StepDAO;
import org.fablab.labank.dto.StepDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Kandel HANAFI on 30/03/2017.
 * Controleur REST permettant de gerer les webs services relatives aux Training.
 */
@RestController
public class Steps {
    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    StepDAO stepDAO;

    @RequestMapping("/steps")
    public List<StepDTO> getAll(){
        return (List<StepDTO>) this.stepDAO.findAll();
    }

    /**
     * Methode permettant, à partir de l'id du projet, de retourner une liste de StepDTO.
     * @return List<StepDTO> steps : liste de StepDTO.
     */
    @RequestMapping("/steps/{id}")
    public List<StepDTO> query(@PathVariable Long id){
        System.out.println("test");
        return stepDAO.findByIdProject(id);
    }
}
