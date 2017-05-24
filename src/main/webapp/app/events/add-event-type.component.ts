import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {IEventType} from "./IEventType";
/**
 * Created by Kandel on 24/05/2017.
 */
@Component({
    selector:'add-event-type',
    templateUrl: '../app/events/add-event-type.html',
    providers: [EventsService]
})
export class AddEventTypeComponent{
    router: Router;
    eventTypeForm:FormGroup;

    eventType:IEventType;

    constructor(router:Router,form: FormBuilder, private eventsService:EventsService, private location:Location){
        this.eventType = new IEventType();

        this.router = router;
        this.eventTypeForm = form.group({ libelle: ['', Validators.required] });
    }

    addEventType(){
        this.eventType = new IEventType();
        this.eventType.libelle = this.eventTypeForm.value.libelle;

        this.eventsService.saveEventType(this.eventType).subscribe((eventType:IEventType) => {
            this.eventType = eventType;
            this.router.navigate(['admin/events/home']);
        });

    }

    goBack(): void {
        this.location.back();
    }
}