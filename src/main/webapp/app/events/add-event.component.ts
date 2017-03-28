/**
 * Created by Kandel HANAFI on 15/03/17.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import { Location } from '@angular/common';

import {EventsService} from "./events.service";
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";
import {CRecurrence} from "./CRecurrence";

@Component({
    selector: 'add-event',
    templateUrl: './app/events/add-event.html',
    providers: [EventsService]
})
export class AddEventComponent{
    public startAt: Date = new Date();
    public endAt: Date = new Date();

    router: Router;
    eventForm:FormGroup;

    event:IEvent;
    eventType:IEventType;
    recurrence: CRecurrence;

    picture:string;
    error:string;
    display:string;
    test:string;

    constructor(router:Router,form: FormBuilder, private eventService:EventsService, private location:Location){
        this.event = new IEvent();
        this.eventType = new IEventType();
        this.recurrence = new CRecurrence();
        this.test="";

        this.router = router;
        this.eventForm = form.group({
            title: ['', Validators.required],
            picture:"",
            description: ['', Validators.required],
            allDay : ['', Validators.required],
            startDate: ['', Validators.required],
            endDate : ['', Validators.required],
            startAt :"",
            endAt : "",
            endRecurrence : "",
            standardPrice : "",
            reducedFare : "",
            nbTickets : ""
        });
    }

    addEvent(){
        this.event = new IEvent();
        this.event.title = this.eventForm.value.title;
        /*TODO: a supprimer ou à modifier lorsque l'upload de fichier sera implementé */
        if(this.picture == null){
            this.event.picture = '../assets/img/events/defaultEvent.png';
        }else{
            this.event.picture = this.picture;
        }
        /*FIN TODO*/
        this.event.description = this. eventForm.value.description ;
        this.event.idEventType = this.eventType.idEventType ;
        this.event.allDay = this.eventForm.value.allDay ;
        this.event.startDate = this.eventForm.value.startDate ;
        this.event.endDate = this.eventForm.value.endDate ;

        this.event.startAt = this.startAt;
        this.event.endAt = this.endAt;
        this.event.idRecurrence = this.recurrence.idRecurrence;

        this.event.standardPrice = this.eventForm.value.standardPrice ;
        this.event.reducedFare = this.eventForm.value.reducedFare ;
        this.event.nbTickets = this.eventForm.value.nbTickets ;

        this.eventService.saveEvent(this.event).subscribe((event:IEvent) => {
            this.event = event
            this.router.navigate(['admin/events/home']);
        });

    }

    getPicture(picture:string){
        this.picture = '../assets/img/events/'+ picture;
    }

    getEventType(eventType:IEventType){
        this.eventType = eventType;
    }

    getRecurrence(recurrence:CRecurrence){
        this.recurrence = recurrence;
    }

    goBack(): void {
        this.location.back();
    }
}