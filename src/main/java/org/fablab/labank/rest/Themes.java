package org.fablab.labank.rest;

import org.fablab.labank.dao.ThemeDAO;
import org.fablab.labank.dto.ThemeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<ThemeDTO> query(){
        return (List<ThemeDTO>) themeDAO.findAll();
    }
}
