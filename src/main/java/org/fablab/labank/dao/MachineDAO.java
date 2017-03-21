package org.fablab.labank.dao;

import org.fablab.labank.dto.MachineDTO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by kprim on 27/02/2017.
 */
@Repository
public interface MachineDAO extends CrudRepository<MachineDTO, Long> {
    /**
     * Return the machine having the passed id of null if the machine is not found.
     *
     * @param id the machine id.
     */
    //public MachineDTO findByIdMachine(Long id);
}
