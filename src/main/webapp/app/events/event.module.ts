/**
 * Created by kprim on 03/03/2017.
 */

import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import { EventComponent } from './event.component';
import { Events } from './events';
import { EventsService } from './events.service';
import { AdminEventsHomeComponent } from './admin-events-home.component';
import { AdminEventsTypesComponent } from './admin-events-types.component';
import {AddEventTypeComponent} from "./add-event-type.component";
import {UpdateEventTypeComponent} from "./update-event-type.component";
import {AdminEventsThemesComponent} from "./admin-events-themes.component";
import {AdminEventsAgeRangesComponent} from "./admin-events-ageRanges.component";
import {AddEventAgeRangeComponent} from "./add-event-ageRange.component";
import {UpdateEventAgeRangeComponent} from "./update-event-ageRange.component";
import {AddEventThemeComponent} from "./add-event-theme.component";
import {UpdateEventThemeComponent} from "./update-event-theme.component";
import { AdminEventsPricesComponent} from './admin-events-prices.component';
import { AdminEventsComponent } from './admin-events.component';
import { AddEventComponent } from './add-event.component';
import { UpdateEventComponent } from './update-event.component';
import { EventType } from './eventtype';
import { EventRecurrencesComponent } from './event-recurrences.component';
import { EventTypesSelectComponent } from './event-types-select.component';

import { DatepickerModule, AlertModule, TimepickerModule } from 'ng2-bootstrap';
import {EventThemesComponent} from "./event-themes.component";
import {EventAgeRangesComponent} from "./event-ageRanges.component";

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule, AlertModule.forRoot(),
        DatepickerModule.forRoot(), TimepickerModule.forRoot() ],
    bootstrap: [EventComponent, Events, EventType ],
    declarations: [EventComponent, Events, EventType, AdminEventsComponent, AddEventComponent, UpdateEventComponent,
        AdminEventsHomeComponent, AdminEventsPricesComponent, EventRecurrencesComponent,EventTypesSelectComponent,
        AdminEventsAgeRangesComponent, AddEventAgeRangeComponent, UpdateEventAgeRangeComponent, AdminEventsTypesComponent,
        AddEventTypeComponent, UpdateEventTypeComponent, AdminEventsThemesComponent, AddEventThemeComponent,
        UpdateEventThemeComponent, EventThemesComponent, EventAgeRangesComponent ],
    providers: [ EventsService ]
})

export class EventModule { }