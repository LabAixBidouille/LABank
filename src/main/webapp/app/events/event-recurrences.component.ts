import {Component, Output, EventEmitter} from "@angular/core";

import {CRecurrence} from "./CRecurrence";
import {EventsService} from "./events.service";
import {CR} from "@angular/compiler/src/i18n/serializers/xml_helper";
/**
 * Created by Kandel HANAFI on 17/03/2017.
 */

@Component({
    selector: 'event-recurrences',
    templateUrl: './app/events/event-recurrence.html',
    providers:[EventsService]
})
export class EventRecurrencesComponent{
    recurrences: Array<CRecurrence>;
    recurrence = new CRecurrence();
    @Output()
    recurrenceSelected = new EventEmitter<CRecurrence>();

    constructor(private eventsService:EventsService){
        this.eventsService.getAllRecurrence().subscribe(
            (recurrences:Array<CRecurrence>) => this.recurrences = recurrences);
    }

    selectRecurrence(){
        this.recurrenceSelected.emit(this.recurrence);
    }
}