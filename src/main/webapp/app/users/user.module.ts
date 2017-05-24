/**
 * User module
 * Created by kprim on 12/11/2016.
 */

import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import { User } from './user';
import { Users } from './users';
import { UsersService } from './users.service';
import {UserGroupsComponent} from "./user-groups.component";

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule ],
    exports: [UserGroupsComponent],
    bootstrap: [ User, Users ],
    declarations: [ User, Users,UserGroupsComponent ],
    providers: [ UsersService ]
})
export class UserModule { }
