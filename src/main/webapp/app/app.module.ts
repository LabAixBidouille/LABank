/**
 * App module
 * Created by kprim on 02/01/2017.
 */

import { NgModule }      from '@angular/core';
import { Http, XHRBackend, RequestOptions, HttpModule } from '@angular/http';
import { AccountEventsService } from './account/account.events.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HmacHttpClient } from './utils/hmac-http-client';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';

import { RoutesModule } from './app.routes';
import { AccountModule } from './account/account.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './users/user.module';
import { UtilsModule } from './utils/utils.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MachineModule } from "./machines/machine.module";
import { SignUpModule } from "./signup/sign-up.module";
import { TrainingModule } from "./training/training.module";
import { EventModule } from "./events/event.module"

import { DatepickerModule, TimepickerModule, AlertModule } from 'ng2-bootstrap';
import {ProjectModule} from "./projects/project.module";

@NgModule({
    imports:        [ HttpModule, RouterModule, BrowserModule ,FormsModule, ReactiveFormsModule, AccountModule,
        LoginModule, UserModule, UtilsModule, RoutesModule, DashboardModule,MachineModule, TrainingModule, SignUpModule,
        EventModule, AlertModule.forRoot(), DatepickerModule.forRoot(), TimepickerModule.forRoot(), ProjectModule],
    declarations:   [ AppComponent, Header, Sidebar ],
    bootstrap:      [ AppComponent, Header ],
    providers:      [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {
            provide: Http,
            useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, accountEventService: AccountEventsService) => {
               return new HmacHttpClient(xhrBackend, requestOptions, accountEventService);
            },
            deps: [XHRBackend, RequestOptions, AccountEventsService],
            multi: false
        }]
})
export class AppModule { }
