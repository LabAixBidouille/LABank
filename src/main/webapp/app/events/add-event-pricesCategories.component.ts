import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CPricesCategories} from "./CPricesCategories";
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
    pricesCategoriesForm:FormGroup;

    pricesCategory:CPricesCategories;

    constructor(router:Router,form: FormBuilder, private eventsService:EventsService, private location:Location){
        this.pricesCategory = new CPricesCategories();

        this.router = router;
        this.pricesCategoriesForm = form.group({
            name: ['', Validators.required],
            description: ['', Validators.required]});
    }

    addPricesCategories(){
        this.pricesCategory = new CPricesCategories();
        this.pricesCategory.name = this.pricesCategoriesForm.value.name;
        this.pricesCategory.description = this.pricesCategoriesForm.value.description;
        this.pricesCategory.usageCount = 0;

        this.eventsService.savePricesCategory(this.pricesCategory).subscribe((pricesCategory:CPricesCategories) => {
            this.pricesCategory = pricesCategory;
            this.router.navigate(['admin/events/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}