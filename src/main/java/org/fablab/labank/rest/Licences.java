package org.fablab.labank.rest;

import org.fablab.labank.dao.LicenceDAO;
import org.fablab.labank.dto.LicenceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel HANAFI on 29/03/2017.
 *  Controleur REST permettant de gerer les webs services relatives aux Licences.
 */
@RestController
public class Licences {
    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    LicenceDAO licenceDAO;

    /**
     * Methode permettant de retourner une liste de LicenceDTO à l'URL spécifiée
     * @return List<LicenceDTO> licences : liste de LicenceDTO
     */
    @RequestMapping("/licences")
    public List<LicenceDTO> getAllLicence(){
        return (List<LicenceDTO>) licenceDAO.findAll();
    }
    /**
     * Methode permettant de retourner l'objet LicenceDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet LicenceDTO à recuperer.
     * @return LicenceDTO licence : objet LicenceDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/licences/{id}")
    public LicenceDTO getLicence(@PathVariable Long id){
        return this.licenceDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet LicenceDTO.
     * @param licence : objet LicenceDTO.
     * @return LicenceDTO licence : objet LicenceDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects/licences", method = RequestMethod.POST)
    public LicenceDTO save(@RequestBody LicenceDTO licence){
        LicenceDTO l = null;
        try {
            l = this.licenceDAO.save(licence);
        }catch(Exception e){
            e.printStackTrace();
        }
        return l;
    }

    /**
     * Methode permettant de mettre à jour l'objet LicenceDTO passé en parametre de la requete HTTP.
     * @param licence : objet LicenceDTO.
     * @return LicenceDTO licence : objet LicenceDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects/licences", method = RequestMethod.PUT)
    public LicenceDTO update(@RequestBody LicenceDTO licence){
        LicenceDTO l = null;
        try {
            l = this.licenceDAO.save(licence);
        }catch(Exception e){
            e.printStackTrace();
        }
        return l;
    }

    /**
     * Methode permettant de supprimer l'objet LicenceDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet LicenceDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/projects/licences/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.licenceDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
