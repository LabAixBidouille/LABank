package org.fablab.labank.dto;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * Created by Kandel on 22/06/2017.
 * Classe DTO permettant de gerer les informations relatives aux PricesCategories.
 */
@Table(name = "eventpricescategories")
@Entity
public class EventPricesCategoriesDTO implements Serializable{
    // ------------------------
    // PRIVATE FIELDS
    // ------------------------

    @Id
    @ManyToOne
    @JoinColumn(name = "event_idevent")
    private EventDTO event;

    @Id
    @ManyToOne
    @JoinColumn(name = "pricescategories_idpricescategories")
    private PricesCategoriesDTO pricesCat;

    @NotNull
    private float price;

    // ------------------------
    // PUBLIC METHODS
    // ------------------------

    public EventPricesCategoriesDTO(){}

    public EventDTO getEvent() {
        return event;
    }

    public void setEvent(EventDTO event) {
        this.event = event;
    }

    public PricesCategoriesDTO getPricesCat() {
        return pricesCat;
    }

    public void setPricesCat(PricesCategoriesDTO pricesCat) {
        this.pricesCat = pricesCat;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
