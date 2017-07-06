import {Component, EventEmitter, Output, Input} from "@angular/core";
import {EventsService} from "./events.service";
import {CPricesCategories} from "./CPricesCategories";
/**
 * Created by Kandel on 29/06/2017.
 */
@Component({
    selector: 'event-pricesCategories',
    templateUrl: '../app/events/event-pricesCategories.html',
    providers :[EventsService]

})
export class EventPricesCategoriesComponent{
    pricesCategories:Array<CPricesCategories>;
    @Input()
    pricesCategory = new CPricesCategories();
    @Input()
    price:number;
    @Output()
    pricesCategorySelected = new EventEmitter<CPricesCategories>();
    @Output()
    priceSelected = new EventEmitter<number>();
    show=true;
    noDelete=false;

    constructor(private eventsService:EventsService){
        this.show=true;
        this.noDelete=false;
        this.eventsService.getAllPricesCategories().subscribe((pricesCategories:Array<CPricesCategories>) =>
            this.pricesCategories = pricesCategories);
    }

    validate(){
        this.pricesCategorySelected.emit(this.pricesCategory);
        this.priceSelected.emit(this.price);
        this.noDelete = true;
    }

    delete(){
        this.show = false
    }

    selectPricesCategory(){

    }
}