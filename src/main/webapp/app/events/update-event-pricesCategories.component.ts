import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {Location} from "@angular/common";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {CPricesCategories} from "./CPricesCategories";
/**
 * Created by Kandel on 22/06/2017.
 */
@Component({
    selector: 'update-event-pricesCategories',
    templateUrl: './app/events/update-event-pricesCategories.html',
    providers: [EventsService]
})
export class UpdateEventPricesCategoriesComponent{
    pricesCategory= new CPricesCategories();
    pricesCategories = new Array<CPricesCategories>();

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private eventsService:EventsService){
        this.pricesCategories=[];
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.eventsService.getPricesCategory(+params['id']))
            .subscribe( (pricesCategory: CPricesCategories) => this.pricesCategory = pricesCategory );
    }

    updatePricesCategory(){
        this.eventsService.updatePricesCategory(this.pricesCategory).subscribe((pricesCategory:CPricesCategories) => {
            this.pricesCategory = pricesCategory;
            this.eventsService.getAllPricesCategories().subscribe( (pricesCategories:Array<CPricesCategories>) => this.pricesCategories = pricesCategories );
            this.router.navigate(['/admin/events/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}