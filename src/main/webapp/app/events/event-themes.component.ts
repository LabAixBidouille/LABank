import {Component, EventEmitter, Output} from "@angular/core";
import {EventsService} from "./events.service";
import {CEventTheme} from "./CEventTheme";
/**
 * Created by Kandel on 29/05/2017.
 */
@Component({
    selector: 'event-themes',
    templateUrl: '../app/events/event-themes.html',
    providers: [EventsService]
})
export class EventThemesComponent{
    themes:Array<CEventTheme>;
    theme = new CEventTheme();
    @Output()
    themeSelected = new EventEmitter<CEventTheme>();

    constructor(private eventsService: EventsService){
        this.eventsService.getAllEventTheme().subscribe( (themes:Array<CEventTheme>) => this.themes = themes);
    }

    selectTheme(){
        this.themeSelected.emit(this.theme);
    }


}