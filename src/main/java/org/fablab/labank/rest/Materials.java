package org.fablab.labank.rest;

import org.fablab.labank.dao.MaterialDAO;
import org.fablab.labank.dto.MaterialDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel HANAFI on 29/03/2017.
 *  Controleur REST permettant de gerer les webs services relatives aux Materials.
 */
@RestController
public class Materials {

    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    MaterialDAO materialDAO;

    /**
     * Methode permettant de retourner une liste de MaterialDTO à l'URL spécifiée
     * @return List<MaterialDTO> materials : liste de MaterialDTO
     */
    @RequestMapping("/materials")
    public List<MaterialDTO> getAll(){
        return (List<MaterialDTO>) materialDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet LicenceDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet MaterialDTO à recuperer.
     * @return MaterialDTO material : objet MaterialDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/materials/{id}")
    public MaterialDTO getMaterial(@PathVariable Long id){
        return this.materialDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet LicenceDTO.
     * @param material : objet MaterialDTO.
     * @return MaterialDTO material : objet MaterialDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects/materials", method = RequestMethod.POST)
    public MaterialDTO save(@RequestBody MaterialDTO material){
        MaterialDTO m = null;
        try {
            m = this.materialDAO.save(material);
        }catch(Exception e){
            e.printStackTrace();
        }
        return m;
    }

    /**
     * Methode permettant de mettre à jour l'objet MaterialDTO passé en parametre de la requete HTTP.
     * @param material : objet MaterialDTO.
     * @return MaterialDTO material : objet MaterialDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects/materials", method = RequestMethod.PUT)
    public MaterialDTO update(@RequestBody MaterialDTO material){
        MaterialDTO m = null;
        try {
            m = this.materialDAO.save(material);
        }catch(Exception e){
            e.printStackTrace();
        }
        return m;
    }

    /**
     * Methode permettant de supprimer l'objet MaterialDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet MaterialDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/projects/materials/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.materialDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
