import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {CAgeRange} from "./CAgeRange";
import {EventsService} from "./events.service";
import {Location} from "@angular/common";
/**
 * Created by Kandel on 24/05/2017.
 */
@Component({
    selector: 'add-event-ageRange',
    templateUrl: '../app/events/add-event-ageRange.html',
    providers: [EventsService]
})
export class AddEventAgeRangeComponent{
    router: Router;
    ageRangeForm:FormGroup;

    ageRange:CAgeRange;

    constructor(router:Router,form: FormBuilder, private eventsService:EventsService, private location:Location){
        this.ageRange = new CAgeRange();

        this.router = router;
        this.ageRangeForm = form.group({ name: ['', Validators.required] });
    }

    addAgeRange(){
        this.ageRange = new CAgeRange();
        this.ageRange.name = this.ageRangeForm.value.name;

        this.eventsService.saveAgeRange(this.ageRange).subscribe((ageRange:CAgeRange) => {
            this.ageRange = ageRange;
            this.router.navigate(['admin/events/home']);
        });

    }

    goBack(): void {
        this.location.back();
    }
}