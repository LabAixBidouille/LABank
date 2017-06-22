import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CEventPricesCategories} from "./CEventPricesCategories";
import {Location} from "@angular/common";
/**
 * Created by Kandel on 22/06/2017.
 */
@Component({
    selector:'add-event-pricesCategories',
    templateUrl:'./app/events/add-event-pricesCategories.html',
    providers:[EventsService]
})
export class AddEventPricesCategoriesComponent{
    router: Router;
    eventPricesCategoriesForm:FormGroup;

    eventPricesCategory:CEventPricesCategories;

    constructor(router:Router,form: FormBuilder, private eventsService:EventsService, private location:Location){
        this.eventPricesCategory = new CEventPricesCategories();

        this.router = router;
        this.eventPricesCategoriesForm = form.group({
            name: ['', Validators.required],
            description: ['', Validators.required]});
    }

    addEventPricesCategories(){
        this.eventPricesCategory = new CEventPricesCategories();
        this.eventPricesCategory.name = this.eventPricesCategoriesForm.value.name;
        this.eventPricesCategory.description = this.eventPricesCategoriesForm.value.description;
        this.eventPricesCategory.usageCount = 0;

        this.eventsService.saveEventPricesCategory(this.eventPricesCategory).subscribe((eventPricesCategory:CEventPricesCategories) => {
            this.eventPricesCategory = eventPricesCategory;
            this.router.navigate(['admin/events/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}