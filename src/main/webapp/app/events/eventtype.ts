/**
 * Created by kprim on 07/03/2017.
 */
import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {IEventType} from "./IEventType";
import {Router} from "@angular/router";

@Component({
    selector: 'eventtype',
    templateUrl: './app/events/events.html',
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
        eventsService.getAll().subscribe((eventType:Array<IEventType>) => this.eventType = eventType);
    }


    onSelectCategory(event:Event,id:string):void {
        // event.preventDefault();
        // this.router.navigate(['/user',id]);
        // this.eventsService.getEventsListByCategory(id).subscribe()
    }
}