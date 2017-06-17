package org.fablab.labank.rest;
import org.fablab.labank.dao.*;
import org.fablab.labank.dto.LicenceDTO;
import org.fablab.labank.dto.ProjectDTO;
import org.fablab.labank.dto.StepDTO;
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
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    StepDAO stepDAO;

    /**
     * Methode permettant de retourner une liste de ProjectDTO à l'URL spécifiée
     * @return List<ProjectDTO> projects : liste de ProjectDTO
     */
    @RequestMapping("/projects")
    public List<ProjectDTO> getAll(){
        return (List<ProjectDTO>) projectDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet ProjectDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet ProjectDTO à recuperer.
     * @return ProjectDTO project : objet ProjectDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/projects/{id}")
    public ProjectDTO getById(@PathVariable Long id){
        ProjectDTO p = null;
        try{
            p=projectDAO.findOne(id);
            //p.setProjectSteps(stepDAO.findByIdProject(p.getIdProject()));
            System.out.println("Taille de la liste de steps: "+p.getProjectSteps().size());
        }catch(Exception e){
            e.printStackTrace();
        }
        return p;
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
            System.out.println(p.getIdProject());
//            this.saveSteps(p);
        }catch(Exception e){
            e.printStackTrace();
        }
        return p;
    }

    /**
     * Methode permettant de mettre à jour l'objet ProjectDTO passé en parametre de la requete HTTP.
     * @param project : objet ProjectDTO.
     * @return ProjectDTO project : objet ProjectDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects", method = RequestMethod.PUT)
    public ProjectDTO update(@RequestBody ProjectDTO project){
        ProjectDTO p = null;
        try {
            p = this.projectDAO.save(project);
//            this.saveSteps(project);
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
            this.deleteSteps(this.projectDAO.findOne(id));
            this.projectDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }

    /**
     * Methode permettant de mettre à jour et enregistrer les etapes d'un projet
     * @param project
     */
    public void saveSteps(ProjectDTO project){
        StepDTO step = null;
        if(project != null && project.getProjectSteps().size()>0) {
            for (int i = 0; i < project.getProjectSteps().size(); i++) {
                step = project.getProjectSteps().get(i);
//                step.setIdProject(project.getIdProject());
                System.out.println(step.getTitle());
                this.stepDAO.save(step);
            }
        }
    }

    /**
     * Methode permettant de supprimer les etapes d'un projet
     * @param project
     */
    public void deleteSteps(ProjectDTO project){
        StepDTO step = null;
        if(project.getProjectSteps().size()>0) {
            for (int i = 0; i < project.getProjectSteps().size(); i++) {
                step = project.getProjectSteps().get(i);
//                step.setIdProject(project.getIdProject());
                this.stepDAO.delete(step.getIdStep());
            }
        }
    }
}
