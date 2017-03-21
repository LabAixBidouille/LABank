/**
 * Created by kprim on 27/02/2017.
 */

import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import { Machine } from './machine';
import { Machines } from './machines';
import { AdminMachinesComponent } from './admin-machines.component';
import { AddMachineComponent } from './add-machine.component';
import { UpdateMachineComponent } from './update-machine.component';
import { MachinesService } from './machines.service';

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule ],
    bootstrap: [ Machine, Machines,  AdminMachinesComponent, AddMachineComponent, UpdateMachineComponent ],
    declarations: [ Machine, Machines, AdminMachinesComponent, AddMachineComponent, UpdateMachineComponent ],
    providers: [ MachinesService ]
})
export class MachineModule { }
