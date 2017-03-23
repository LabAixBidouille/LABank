import {Component, Output, EventEmitter} from "@angular/core";

import {EventsService} from "./events.service";
import {IEventType} from "./IEventType";
/**
 * Created by Kandel HANAFI on 22/03/2017.
 */
@Component({
    selector: 'event-types-select',
    templateUrl: './app/events/event-types-select.html',
    providers: [EventsService]
})
export class EventTypesSelectComponent{
    eventTypes:Array<IEventType>;
    eventType = new IEventType();
    @Output()
    eventTypeSelected = new EventEmitter<IEventType>();

    constructor(private eventsService:EventsService){
        this.eventsService.getAllEventType().subscribe((eventTypes:Array<IEventType>) => this.eventTypes = eventTypes);
    }

    selectEventType(){
        this.eventTypeSelected.emit(this.eventType);
    }
}