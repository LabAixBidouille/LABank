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
    @Output()
    pricesCategorySelected = new EventEmitter<CPricesCategories>();
    show=true;
    noDelete=false;

    constructor(private eventsService:EventsService){
        this.show=true;
        this.noDelete=false;
        this.eventsService.getAllPricesCategories().subscribe((pricesCategories:Array<CPricesCategories>) =>
            this.pricesCategories = pricesCategories);
    }

    validate(){

        console.log(this.pricesCategory.name);
        this.pricesCategorySelected.emit(this.pricesCategory);
        this.noDelete = true;
    }

    delete(){
        this.show = false
    }

    selectPricesCategory(){

    }
}