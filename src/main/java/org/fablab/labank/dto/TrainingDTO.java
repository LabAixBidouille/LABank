package org.fablab.labank.dto;

import org.springframework.web.bind.annotation.RestController;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by Kandel HANAFI on 03/03/2017.
 * Classe DTO permettant de gerer les informations relatives aux Training.
 */
@Entity
@Table(name="Training")
public class TrainingDTO {

    // ------------------------
    // PRIVATE FIELDS
    // ------------------------

    // An autogenerated id (unique for each user in the db)

    @Id
    @Column(name="idtraining")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    // The training's name
    @NotNull
    private String name;

    //The training's illustration (URL of the image)
    @NotNull
    private String illustration;

    // The training's description
    @NotNull
    private String description;

    // The number of available tickets
    @Column(name = "nbticket")
    private Long nbTicket;

    // Booelan that indicates if the training has to be displayed
    @NotNull
    private boolean display;

    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public TrainingDTO(){}

    public TrainingDTO(Long id) {
        this.id = id;
    }

    public TrainingDTO (TrainingDTO trainingDTO){
        this.id = trainingDTO.id;
        this.illustration = trainingDTO.illustration;
        this.description = trainingDTO.description;
        this.nbTicket = trainingDTO.nbTicket;
        this.display = trainingDTO.display;
    }

    /** Getter and Setters **/
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIllustration() {
        return illustration;
    }

    public void setIllustration(String illustration) {
        this.illustration = illustration;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getNbTicket() {
        return nbTicket;
    }

    public void setNbTicket(Long nbTicket) {
        this.nbTicket = nbTicket;
    }

    public boolean isDisplay() {
        return display;
    }

    public void setDisplay(boolean display) {
        this.display = display;
    }
}
