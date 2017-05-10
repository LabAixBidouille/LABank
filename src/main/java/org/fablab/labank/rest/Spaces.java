package org.fablab.labank.rest;

import org.fablab.labank.dao.SpaceDAO;
import org.fablab.labank.dto.SpaceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel on 10/05/2017.
 * Controleur REST permettant de gerer les webs services relatives aux Spaces.
 */
@RestController
public class Spaces {

    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    SpaceDAO spaceDAO;

    /**
     * Methode permettant de retourner une liste de SpaceDTO à l'URL spécifiée
     * @return List<SpaceDTO> spaces : liste de SpaceDTO
     */
    @RequestMapping("/spaces")
    public List<SpaceDTO> getAll(){
        return (List<SpaceDTO>) spaceDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet SpaceDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet SpaceDTO à recuperer.
     * @return SpaceDTO space : objet SpaceDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/spaces/{id}")
    public SpaceDTO getById(@PathVariable Long id){
        SpaceDTO s = null;
        System.out.println("Test id:"+id);
        try{
            s=spaceDAO.findOne(id);
        }catch(Exception e){
            e.printStackTrace();
        }
        return s;
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet SpaceDTO.
     * @param space : objet SpaceDTO.
     * @return SpaceDTO space : objet SpaceDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/spaces", method = RequestMethod.POST)
    public SpaceDTO save(@RequestBody SpaceDTO space){
        SpaceDTO s = null;
        try {
            s = this.spaceDAO.save(space);
        }catch(Exception e){
            e.printStackTrace();
        }
        return s;
    }

    /**
     * Methode permettant de mettre à jour l'objet SpaceDTO passé en parametre de la requete HTTP.
     * @param space : objet SpaceDTO.
     * @return SpaceDTO space : objet SpaceDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/spaces", method = RequestMethod.PUT)
    public SpaceDTO update(@RequestBody SpaceDTO space){
        SpaceDTO s = null;
        try {
            s = this.spaceDAO.save(space);
        }catch(Exception e){
            e.printStackTrace();
        }
        return s;
    }

    /**
     * Methode permettant de supprimer l'objet SpaceDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet SpaceDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/spaces/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.spaceDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }


}
