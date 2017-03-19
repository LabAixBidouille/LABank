import {Component, NgZone} from "@angular/core";
import {MachinesService} from "./machines.service";
import {Router} from "@angular/router";
/**
 * Created by Kandel HANAFI on 17/03/2017.
 */

@Component({
    selector:'admin-machines',
    templateUrl:'./app/machines/admin-machines.html',
    providers:[MachinesService]
})
export class AdminMachinesComponent{

    constructor(private router: Router, private ngZone: NgZone, private machinesService:MachinesService ){

    }

    newMachine(){}

    updateMachine(){}

    deleteMachine(){}

    delete(){}

    goBack(){}
}

