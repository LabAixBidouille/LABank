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

import { AppComponent } from './app.component';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';


import { RoutesModule } from './app.routes';
import { AccountModule } from './account/account.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './users/user.module';
import { UtilsModule } from './utils/utils.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    imports:        [ HttpModule, RouterModule, BrowserModule, AccountModule, LoginModule, UserModule, UtilsModule, RoutesModule, DashboardModule ],
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
