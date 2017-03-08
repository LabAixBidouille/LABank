/**
 * Created by kprim on 03/03/2017.
 */

import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import {EventComponent} from './event.component';
import { Events } from './events';
import { EventsService } from './events.service';
import { EventType } from './eventtype'

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule ],
    bootstrap: [EventComponent, Events, EventType ],
    declarations: [EventComponent, Events, EventType ],
    providers: [ EventsService ]
})

export class EventModule { }