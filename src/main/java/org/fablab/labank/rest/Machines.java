package org.fablab.labank.rest;

import org.fablab.labank.dao.MachineDAO;
import org.fablab.labank.dto.MachineDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by kprim on 28/02/2017.
 * Controleur REST permettant de gerer les webs services relatives aux Machines.
 */
@RestController
public class Machines {

    /**
     * Objet permettant d'utiliser les methodes DAO.
     */
    @Autowired
    MachineDAO machineDAO;

    /**
     * Methode permettant de retourner une liste de MachineDTO à l'URL spécifiée
     * @return List<MachineDTO> machines : liste de MachineDTO
     */
    @RequestMapping("/machines")
    public List<MachineDTO> query(){
        return (List<MachineDTO>) machineDAO.findAll();
    }

    /**
     * Methode permettant de retourner l'objet MachineDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet MachineDTO à recuperer.
     * @return MachineDTO machine : objet MachineDTO ayant l'id passé en parametre de l'URL.
     */
    @RequestMapping("/machines/{id}")
    public MachineDTO query(@PathVariable Long id){
        return machineDAO.findOne(id);
    }

    /**
     * Methode permettant d'enregistrer un nouvel objet MachineDTO.
     * @param machine : objet MachineDTO.
     * @return MachineDTO machine : objet MachineDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/machines", method = RequestMethod.POST)
    public MachineDTO save(@RequestBody MachineDTO machine){
        MachineDTO t = null;
        try {
            t = this.machineDAO.save(machine);
        }catch(Exception e){
            e.printStackTrace();
        }
        return t;
    }

    /**
     * Methode permettant de mettre à jour l'objet MachineDTO passé en parametre de la requete HTTP.
     * @param machine : objet MachineDTO.
     * @return MachineDTO machine : objet MachineDTO passé en parametre de la requete HTTP.
     */
    @RequestMapping(value = "/admin/machines", method = RequestMethod.PUT)
    public MachineDTO update(@RequestBody MachineDTO machine){
        MachineDTO t = null;
        try {
            t = this.machineDAO.save(machine);
        }catch(Exception e){
            e.printStackTrace();
        }
        return t;
    }

    /**
     * Methode permettant de supprimer l'objet MachineDTO ayant l'id passé en parametre de l'URL.
     * @param id : id de l'objet MachineDTO à supprimer.
     * @return boolean msg : booleen permettant d'indiquer le succes ou l'echec de la suppression.
     */
    @RequestMapping(value = "/admin/machines/{id}", method = RequestMethod.DELETE)
    public boolean delete(@PathVariable Long id){
        boolean msg = false;
        try {
            this.machineDAO.delete(id);
            msg = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return msg;
    }
}
