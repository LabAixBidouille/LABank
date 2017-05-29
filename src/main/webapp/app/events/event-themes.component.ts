import {Component, EventEmitter, Output} from "@angular/core";
import {CTheme} from "../projects/CTheme";
import {EventsService} from "./events.service";
import {CEventTheme} from "./CEventTheme";
/**
 * Created by Kandel on 29/05/2017.
 */
@Component({
    selector: 'event-themes',
    templateUrl: '../app/events/event-themes.html'
})
export class EventThemesComponent{
    themes:Array<CEventTheme>;
    themeSelected = new CEventTheme();
    @Output()
    selectedTheme = new EventEmitter<CEventTheme>();

    constructor(private eventsService: EventsService){
        this.eventsService.getAllEventTheme().subscribe( (themes:Array<CEventTheme>) => this.themes = themes);
    }

    selectTheme(){
        this.selectedTheme.emit(this.themeSelected);
    }


}