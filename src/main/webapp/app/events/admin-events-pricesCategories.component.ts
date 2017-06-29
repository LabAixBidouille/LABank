import {Component} from "@angular/core";
import {CPricesCategories} from "./CPricesCategories";
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
    pricesCategoryToDelete: CPricesCategories;
    pricesCategories: Array<CPricesCategories>;

    msg:boolean;

    constructor(private router:Router, private eventsService:EventsService){
        this.pricesCategories = [];
        this.pricesCategoryToDelete = new CPricesCategories();
        this.msg=false;
        this.eventsService.getAllPricesCategories().subscribe((pricesCategories:Array<CPricesCategories>)=> {
            this.pricesCategories = pricesCategories;
            console.log(pricesCategories[0].name);
        });
    }

    newPricesCategory(){
        this.router.navigate(['admin/events/prices/new']);
    }

    updatePricesCategory(id:number){
        this.router.navigate(['admin/events/prices/', id]);
    }

    deletePricesCategory(id:number){
        this.eventsService.getPricesCategory(id).subscribe( (pricesCategory:CPricesCategories) => this.pricesCategoryToDelete = pricesCategory );
    }

    delete(){
        this.eventsService.deletePricesCategory(this.pricesCategoryToDelete.idPricesCategories).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.eventsService.getAllPricesCategories().subscribe( (pricesCategories:Array<CPricesCategories>) => this.pricesCategories = pricesCategories );
            this.router.navigate(['admin/events/home']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }
}