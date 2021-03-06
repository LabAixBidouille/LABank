package org.fablab.labank.dto;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by kprim on 23/03/2017.
 */
@Entity
@Table(name = "docmachine")
public class MachineManualDTO {
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------

    // An autogenerated id (unique for each user in the db)
    @Id
    @Column(name = "iddocmachine")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idDocMachine;

    // The file name
    @NotNull
    @Column(name = "filename")
    private String fileName;

    // ------------------------
    // PUBLIC METHODS
    // ------------------------
    public MachineManualDTO() { }

    public MachineManualDTO(Long id) {
        this.idDocMachine = id;
    }

    public MachineManualDTO(MachineManualDTO machineManualDTO) {
        this.idDocMachine = machineManualDTO.idDocMachine;
        this.fileName = machineManualDTO.fileName;
    }

    // Getter and setter methods
    public Long getIdDocMachine() {
        return idDocMachine;
    }

    public void setIdDocMachine(Long idDocMachine) {
        this.idDocMachine = idDocMachine;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}
