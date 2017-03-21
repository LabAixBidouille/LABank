/**
 * Created by Kandel HANAFI on 15/03/17.
 */
import {Component, OnInit, Input} from '@angular/core';
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
    router: Router;
    eventForm:FormGroup;

    event:IEvent;
    eventsType:Array<IEventType>;
    recurrence: CRecurrence;

    picture:string;
    error:string;
    display:string;

    constructor(router:Router,form: FormBuilder, private eventService:EventsService, private location:Location){
        this.event = new IEvent();
        this.eventsType = [];
        this.recurrence = new CRecurrence();

        this.router = router;
        this.eventForm = form.group({
        title: ['', Validators.required],
        picture: "",
        description: ['', Validators.required],
        idEventType: ['', Validators.required],
        allDay : ['', Validators.required],
        startDate: ['', Validators.required],
        endDate : ['', Validators.required],
        startAt :"",
        endAt : "",
        idRecurrence : ['', Validators.required],
        endRecurrence : "",
        standardPrice : ['', Validators.required],
        reducedFare : "",
        nbTickets : ""
        });
    }

    addEvent(){
        this.event = new IEvent();


        this.eventService.saveEvent(this.event).subscribe((event:IEvent) => this.event = event);

        this.router.navigate(['/admin/events']);
    }

    getPicture(picture:string){
        console.log(this.recurrence.type);
        this.picture = '../assets/img/events/'+ picture;
    }

    getRecurrence(recurrence:CRecurrence){
        this.recurrence = recurrence;
    }

    displayHour(value:any){
        this.display=value;
    }

    goBack(): void {
        this.location.back();
    }
}