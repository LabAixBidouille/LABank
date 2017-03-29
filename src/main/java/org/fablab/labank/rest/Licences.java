package org.fablab.labank.rest;

import org.fablab.labank.dao.LicenceDAO;
import org.fablab.labank.dto.LicenceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<LicenceDTO> query(){
        return (List<LicenceDTO>) licenceDAO.findAll();
    }
}
