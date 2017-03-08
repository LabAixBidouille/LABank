import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {EventsService} from './events.service';
import {IEvent} from "./IEvent";

@Component({
    selector: 'event',
    templateUrl: './app/events/event.html'
})
export class Event{
    event:IEvent;

    constructor(private eventsService: EventsService, private route: ActivatedRoute, private location: Location){
        this.training = new CTraining();
    }
}