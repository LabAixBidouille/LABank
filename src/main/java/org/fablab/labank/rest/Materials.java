package org.fablab.labank.rest;

import org.fablab.labank.dao.MaterialDAO;
import org.fablab.labank.dto.MaterialDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<MaterialDTO> query(){
        return (List<MaterialDTO>) materialDAO.findAll();
    }
}
