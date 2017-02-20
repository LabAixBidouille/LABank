/**
 * Created by kprim on 15/02/2017.
 */


import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import { Dashboard } from './dashboard';

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule ],
    bootstrap: [ Dashboard ],
    declarations: [ Dashboard ]
})
export class DashboardModule { }