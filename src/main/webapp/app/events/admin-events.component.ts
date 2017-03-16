/**
 * Created by Kandel HANAFI on 15/03/17.
 */
import {Component, NgZone, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {EventsService} from "./events.service";
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";

@Component({
    selector: 'admin-events',
    templateUrl: './app//events/admin-events.html',
    providers: [EventsService]
})
export class AdminEventsComponent implements OnInit{

    eventToDelete: IEvent;
    events: Array<IEvent>;
    eventsType: Array<IEventType>;

    msg:boolean;

    constructor(private router:Router, private eventService:EventsService, private _ngZone:NgZone, private route: ActivatedRoute){
        this.events = [];
        this.eventsType=[];
        this.eventToDelete = new IEvent();
        this.msg=false;
    }

    ngOnInit(){
        this.eventService.getEventsListByCategory(0).subscribe((events:Array<IEvent>) => this.events = events);
    }

    newEvent(){
        this.router.navigate(['admin/events/new']);
    }

    showReservations(id:number){
        /*TODO*/
    }

    updateEvent(id:number){
        this.router.navigate(['admin/events/', id]);
    }

    deleteEvent(idEvent:number){
        this.eventService.getEvent(idEvent).subscribe( (event:IEvent) => this.eventToDelete = event );
    }

    delete(){
        this.eventService.deleteEvent(this.eventToDelete.idEvent).subscribe( (msg:boolean) => this.msg = msg );

        /*Permets de rafraichir la liste */
        this._ngZone.run(() => { this.eventService.getEventsListByCategory(0).
            subscribe( (events:Array<IEvent>) => this.events = events ); });

        this.router.navigate(['admin/events']);
    }

    closeAlert(){
        this.msg = false;
    }
}