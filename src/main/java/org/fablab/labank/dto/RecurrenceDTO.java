package org.fablab.labank.dto;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by kprim on 02/03/2017.
 */
@Entity
@Table(name = "Recurrence")
public class RecurrenceDTO {

    // ------------------------
    // PRIVATE FIELDS
    // ------------------------

    // An autogenerated id (unique for each user in the db)
    @Id
    @Column(name = "idRecurrence")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idRecurrence;

    // The event recurrence
    @NotNull
    @Column(name = "type")
    private String type;

    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public RecurrenceDTO() { }

    public RecurrenceDTO(RecurrenceDTO recurrence) {
        this.idRecurrence = recurrence.idRecurrence;
        this.type = recurrence.type;
    }

    public RecurrenceDTO(long idRecurrence, String type) {
        this.idRecurrence = idRecurrence;
        this.type = type;
    }

    // Getter and setter methods

    public long getIdRecurrence() {
        return idRecurrence;
    }

    public void setIdRecurrence(long idRecurrence) {
        this.idRecurrence = idRecurrence;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
