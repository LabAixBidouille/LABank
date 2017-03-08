package org.fablab.labank.rest;

import org.fablab.labank.dao.MachineDAO;
import org.fablab.labank.dto.MachineDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by kprim on 28/02/2017.
 */
@RestController
public class Machines {

    @Autowired
    MachineDAO machineDAO;

    @RequestMapping("/machines")
    public List<MachineDTO> query(){
        return (List<MachineDTO>) machineDAO.findAll();
    }

    @RequestMapping("/machines/{id}")
    public MachineDTO query(@PathVariable Integer id){
        return machineDAO.findByIdMachine(Long.valueOf(id));
    }

    @RequestMapping(value = "/machines/{id}", method = RequestMethod.PUT)
    public MachineDTO update(@RequestBody @Valid MachineDTO machineDTO){
        return machineDAO.save(machineDTO);
    }
}
