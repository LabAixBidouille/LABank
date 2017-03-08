/**
 * Created by kprim on 03/03/2017.
 */
import {Component} from '@angular/core';
import {EventsService} from "./events.service";
import {IEventType} from "./IEventType";
import {Router} from "@angular/router";

@Component({
    selector: 'events',
    templateUrl: './app/events/events.html',
    providers:[EventsService]
})
export class Event {

}
