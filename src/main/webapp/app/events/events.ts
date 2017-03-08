/**
 * Created by kprim on 02/03/2017.
 */
import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {EventsService} from './events.service';
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";

@Component({
    selector: 'events',
    templateUrl: './app/events/events.html',
    providers:[EventsService]
})

export class Events {
    events:Array<IEvent>;
    router: Router;
    private sub:any;

    constructor(router: Router, private eventsService:EventsService, private route: ActivatedRoute) {
        this.events = [];
        this.router = router;
        this.eventsService = eventsService;
    }

    ngOnInit():void {
        this.sub = this.route.params.subscribe(params => this.getEventListByCat(0));
    }

    getEventListByCat(id:number):void {
        this.eventsService.getEventsListByCategory(id).subscribe((events:Array<IEvent>) => this.events = events);
    }
}