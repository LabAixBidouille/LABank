import {Component} from "@angular/core";
import {CEventPricesCategories} from "./CEventPricesCategories";
import {Router} from "@angular/router";
import {EventsService} from "./events.service";
/**
 * Created by Kandel HANAFI on 16/03/2017.
 */
@Component({
    selector: 'admin-eventsPricesCategories',
    templateUrl: './app/events/admin-events-pricesCategories.html'
})
export class AdminEventsPricesCategoriesComponent{
    eventPricesCategoryToDelete: CEventPricesCategories;
    eventPricesCategories: Array<CEventPricesCategories>;

    msg:boolean;

    constructor(private router:Router, private eventsService:EventsService){
        this.eventPricesCategories = [];
        this.eventPricesCategoryToDelete = new CEventPricesCategories();
        this.msg=false;
        this.eventsService.getAllEventPricesCategories().subscribe((eventPricesCategories:Array<CEventPricesCategories>)=> {
            this.eventPricesCategories = eventPricesCategories;
            console.log(eventPricesCategories[0].name);
        });
    }

    newEventPricesCategory(){
        this.router.navigate(['admin/events/prices/new']);
    }

    updateEventPricesCategory(id:number){
        this.router.navigate(['admin/events/prices/', id]);
    }

    deleteEventPricesCategory(id:number){
        this.eventsService.getEventPricesCategory(id).subscribe( (eventPricesCategory:CEventPricesCategories) => this.eventPricesCategoryToDelete = eventPricesCategory );
    }

    delete(){
        this.eventsService.deleteEventPricesCategory(this.eventPricesCategoryToDelete.idEventPricesCategories).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.eventsService.getAllEventPricesCategories().subscribe( (eventPricesCategories:Array<CEventPricesCategories>) => this.eventPricesCategories = eventPricesCategories );
            this.router.navigate(['admin/events/home']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }
}