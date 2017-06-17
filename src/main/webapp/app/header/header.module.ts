/**
 * Created by Kandel on 22/05/2017.
 */
import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import {Header} from "./header";
import {UserModule} from "../users/user.module";
import {UsersService} from "../users/users.service";

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule, UserModule ],
    exports:[Header],
    bootstrap: [ Header],
    declarations: [ Header],
    providers: [ UsersService ]
})
export class HeaderModule { }
