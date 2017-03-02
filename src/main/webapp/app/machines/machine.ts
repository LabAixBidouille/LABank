/**
 * Created by kprim on 27/02/2017.
 */
import {Component} from '@angular/core';
import {MachinesService} from "./machines.service";

@Component({
    selector: 'machine',
    templateUrl: './app/machines/machine.html',
    providers:[MachinesService]
})
export class Machine {

}
