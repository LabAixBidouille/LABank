import {Component, EventEmitter, Output} from "@angular/core";
import {CAgeRange} from "./CAgeRange";
import {EventsService} from "./events.service";
/**
 * Created by Kandel on 29/05/2017.
 */
@Component({
    selector: 'event-ageRanges',
    templateUrl: '../app/events/event-ageRange.html'
})
export class EventAgeRangesComponent{
    ageRanges:Array<CAgeRange>;
    ageRangeSelected = new CAgeRange();
    @Output()
    selectedAgeRange = new EventEmitter<CAgeRange>();

    constructor(private eventsService: EventsService){
        this.eventsService.getAllAgeRange().subscribe((ageRanges:Array<CAgeRange>) => this.ageRanges = ageRanges);
    }

    selectAgeRange(){
        this.selectedAgeRange.emit(this.ageRangeSelected);
    }
}