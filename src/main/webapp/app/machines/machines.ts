/**
 * Created by kprim on 27/02/2017.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MachinesService} from './machines.service';
import {IMachine} from "./IMachine";
import {Response} from "@angular/http";
import {Observable} from "rxjs";

@Component({
    selector: 'machines',
    templateUrl: './app/machines/machines.html',
    providers:[MachinesService]
})

export class Machines {
    machines:Array<IMachine>;
    router: Router;
    constructor(router: Router,machineService:MachinesService) {
        this.machines = [];
        this.router = router;
        machineService.getAll().subscribe((machines:Array<IMachine>) => this.machines = machines);
    }

    showMachine(event:Event, id:number):void {
        event.preventDefault();
        this.router.navigate(['/machines', id]);
    }
}
