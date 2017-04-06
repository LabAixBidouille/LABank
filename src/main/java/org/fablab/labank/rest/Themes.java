package org.fablab.labank.rest;

import org.fablab.labank.dao.ThemeDAO;
import org.fablab.labank.dto.ThemeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Kandel HANAFI on 29/03/2017.
 *  Controleur REST permettant de gerer les webs services relatives aux Themes.
 */
@RestController
public class Themes {
    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    ThemeDAO themeDAO;

    /**
     * Methode permettant de retourner une liste de ThemeDTO à l'URL spécifiée
     * @return List<ThemeDTO> themes : liste de ThemeDTO
     */
    @RequestMapping("/themes")
    public List<ThemeDTO> getAll(){
        return (List<ThemeDTO>) themeDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet ThemeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet ThemeDTO à recuperer.
     * @return ThemeDTO theme : objet MaterialDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/themes/{id}")
    public ThemeDTO getTheme(@PathVariable Long id){
        return this.themeDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet ThemeDTO.
     * @param theme : objet MaterialDTO.
     * @return ThemeDTO theme : objet ThemeDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects/themes", method = RequestMethod.POST)
    public ThemeDTO save(@RequestBody ThemeDTO theme){
        ThemeDTO t = null;
        try {
            t = this.themeDAO.save(theme);
        }catch(Exception e){
            e.printStackTrace();
        }
        return t;
    }

    /**
     * Methode permettant de mettre à jour l'objet ThemeDTO passé en parametre de la requete HTTP.
     * @param theme : objet ThemeDTO.
     * @return ThemeDTO theme : objet ThemeDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/projects/themes", method = RequestMethod.PUT)
    public ThemeDTO update(@RequestBody ThemeDTO theme){
        ThemeDTO t = null;
        try {
            t = this.themeDAO.save(theme);
        }catch(Exception e){
            e.printStackTrace();
        }
        return t;
    }

    /**
     * Methode permettant de supprimer l'objet ThemeDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet ThemeDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/projects/themes/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean status = false;
        try {
            this.themeDAO.delete(id);
            status = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return status;
    }
}
