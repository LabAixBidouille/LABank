package org.fablab.labank.rest;
import org.fablab.labank.dao.ProjectDAO;
import org.fablab.labank.dto.ProjectDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel HANAFI on 29/03/2017.
 * Controleur REST permettant de gerer les webs services relatives aux Projets.
 */
@RestController
public class Projects {
    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    ProjectDAO projectDAO;

    /**
     * Methode permettant de retourner une liste de ProjectDTO à l'URL spécifiée
     * @return List<ProjectDTO> projects : liste de ProjectDTO
     */
    @RequestMapping("/projects")
    public List<ProjectDTO> query(){
        return (List<ProjectDTO>) projectDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet ProjectDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet ProjectDTO à recuperer.
     * @return ProjectDTO project : objet ProjectDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/projects/{id}")
    public ProjectDTO query(@PathVariable Long id){
        return projectDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet ProjectDTO.
     * @param project : objet ProjectDTO.
     * @return ProjectDTO project : objet ProjectDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects", method = RequestMethod.POST)
    public ProjectDTO save(@RequestBody ProjectDTO project){
        ProjectDTO p = null;
        try {
            p = this.projectDAO.save(project);
        }catch(Exception e){
            e.printStackTrace();
        }
        return p;
    }

    /**
     * Methode permettant de mettre à jour l'objet ProjectDTO passé en parametre de la requete HTTP.
     * @param project : objet ProjectDTO.
     * @return ProjectDTO project : objet MachineDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects", method = RequestMethod.PUT)
    public ProjectDTO update(@RequestBody ProjectDTO project){
        ProjectDTO p = null;
        try {
            p = this.projectDAO.save(project);
        }catch(Exception e){
            e.printStackTrace();
        }
        return p;
    }

    /**
     * Methode permettant de supprimer l'objet ProjectDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet ProjectDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/projects/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.projectDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
