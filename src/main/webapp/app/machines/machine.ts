/**
 * Created by kprim on 27/02/2017.
 */
import {Component} from '@angular/core';
import {MachinesService} from "./machines.service";
import {IMachine} from "./IMachine";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'machine',
    templateUrl: './app/machines/machine.html',
    providers:[MachinesService]
})

export class Machine {
    machine:IMachine;
    private sub:any;
    constructor(private router: Router, private machinesService:MachinesService, private route: ActivatedRoute) {
        this.machine = new IMachine();
        this.router = router;
        this.machinesService = machinesService;
    }

    ngOnInit():void {
        this.sub = this.route.params.subscribe(params => this.getMachine(params['id']));
    }

    getMachine(id:number):void {
        this.machinesService.getById(id).subscribe((machine:IMachine) => this.machine = machine);
    }
}
