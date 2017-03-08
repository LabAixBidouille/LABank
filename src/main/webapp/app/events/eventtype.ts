/**
 * Created by kprim on 07/03/2017.
 */
import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {IEventType} from "./IEventType";
import {Router} from "@angular/router";

@Component({
    selector: 'eventtype',
    templateUrl: './app/events/eventtype.html',
    providers:[EventsService]
})

export class EventType {
    eventType:Array<IEventType>;
    router: Router;
    eventsService: EventsService;
    constructor(router: Router,eventsService:EventsService) {
        this.eventType = [];
        this.router = router;
        this.eventsService = eventsService;
        eventsService.getAllEventType().subscribe((eventType:Array<IEventType>) => this.eventType = eventType);
    }

    onSelectCategory(event:Event, id:number):void {
        //event.preventDefault();
        this.router.navigate(['/events/cat',id]);
    }
}