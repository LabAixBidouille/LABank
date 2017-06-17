package org.fablab.labank.rest;

import org.fablab.labank.dao.GroupDAO;
import org.fablab.labank.dto.GroupDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Kandel on 22/05/2017.
 * Controleur REST permettant de gerer les webs services relatives aux Spaces.
 */
@RestController
public class Groups {
    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    GroupDAO groupDAO;

    /**
     * Methode permettant de retourner une liste de SpaceDTO à l'URL spécifiée
     * @return List<SpaceDTO> spaces : liste de SpaceDTO
     */
    @RequestMapping("/groups")
    public List<GroupDTO> getAll(){
        return (List<GroupDTO>) groupDAO.findAll();
    }
}
