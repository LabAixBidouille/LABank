import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {Location} from "@angular/common";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {CEventPricesCategories} from "./CEventPricesCategories";
/**
 * Created by Kandel on 22/06/2017.
 */
@Component({
    selector: 'update-event-pricesCategories',
    templateUrl: './app/events/update-event-pricesCategories.html',
    providers: [EventsService]
})
export class UpdateEventPricesCategoriesComponent{
    eventPricesCategory= new CEventPricesCategories();
    eventPricesCategories = new Array<CEventPricesCategories>();

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private eventsService:EventsService){
        this.eventPricesCategories=[];
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.eventsService.getEventPricesCategory(+params['id']))
            .subscribe( (eventPricesCategory: CEventPricesCategories) => this.eventPricesCategory = eventPricesCategory );
    }

    updateEventPricesCategory(){
        this.eventsService.updateEventPricesCategory(this.eventPricesCategory).subscribe((eventPricesCategory:CEventPricesCategories) => {
            this.eventPricesCategory = eventPricesCategory;
            this.eventsService.getAllEventPricesCategories().subscribe( (eventPricesCategories:Array<CEventPricesCategories>) => this.eventPricesCategories = eventPricesCategories );
            this.router.navigate(['/admin/events/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}