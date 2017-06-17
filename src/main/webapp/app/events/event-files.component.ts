import {Component} from "@angular/core";
import {EventsService} from "./events.service";
/**
 * Created by Kandel on 08/06/2017.
 */
@Component({
    selector: 'event-files',
    templateUrl: '../app/events/event-file.html',
    providers: [EventsService]
})
export class EventFilesComponent{

}