import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

import {EventsService} from './events.service';
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";

@Component({
    selector: 'event',
    templateUrl: './app/events/event.html'
})
export class EventComponent{
    event:IEvent;
    eventType:IEventType;

    constructor(private eventsService: EventsService, private route: ActivatedRoute){
        this.event = new IEvent();
        this.eventType = new IEventType();
    }

    ngOnInit(): void {
        this.route.params.switchMap( (params: Params) => this.eventsService.getEvent(+params['id'])).
        subscribe( (event: IEvent) => {
                this.event = event;
                this.eventsService.getEventType(this.event.idEventType).
                subscribe((eventType:IEventType)=> this.eventType = eventType);
            });
    }
}