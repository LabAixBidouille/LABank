package org.fablab.labank.rest;

import org.fablab.labank.dao.RecurrenceDAO;
import org.fablab.labank.dto.RecurrenceDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Kandel HANAFI on 16/03/2017.
 */
@RestController
public class Recurrences {

    @Autowired
    private RecurrenceDAO recurrenceDAO;
/*TODO: requestmapping pour recuperer toutes les recurrences*/
    public List<RecurrenceDTO> getAll(){
        return (List<RecurrenceDTO>) this.recurrenceDAO.findAll();
    }
}
