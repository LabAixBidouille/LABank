import {Component, Output, EventEmitter, Input} from "@angular/core";

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
    recurrence: CRecurrence;
    @Output()
    recurrenceSelected = new EventEmitter<CRecurrence>();

    constructor(private eventsService:EventsService){
        this.recurrence = new CRecurrence;
        this.eventsService.getAllRecurrence().subscribe(
            (recurrences:Array<CRecurrence>) => this.recurrences = recurrences);
    }

    selectRecurrence(recurrence){
        console.log(recurrence.type);
        this.recurrenceSelected.emit(recurrence);
    }
}