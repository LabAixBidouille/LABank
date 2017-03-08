/**
 * Created by kprim on 03/03/2017.
 */

import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import { Event } from './event';
import { Events } from './events';
import { EventsService } from './events.service';
import { EventType } from './eventtype'

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule ],
    bootstrap: [ Event, Events, EventType ],
    declarations: [ Event, Events, EventType ],
    providers: [ EventsService ]
})

export class EventModule { }