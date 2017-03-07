/**
 * Created by kprim on 02/03/2017.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from './events.service';
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";

@Component({
    selector: 'evenements',
    templateUrl: './app/events/eventslist.html',
    providers:[EventsService]
})

export class Events {
    events:Array<IEvent>;
    router: Router;
    constructor(router: Router,eventsService:EventsService) {
        this.events = [];
        this.router = router;
        eventsService.getAllEvents().subscribe((events:Array<IEvent>) => this.events = events);
    }
}