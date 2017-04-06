import {ProjectService} from "./project.service";
import {Component, Output, EventEmitter} from "@angular/core";
import {IMachine} from "../machines/IMachine";
import {MachinesService} from "../machines/machines.service";
/**
 * Created by Kandel HANAFI on 06/04/2017.
 */
@Component({
    selector: 'project-machines',
    templateUrl: './app/projects/project-machine.html',
    providers: [ProjectService]
})
export class ProjectMachinesComponent{

    machines:Array<IMachine>;
    machinesSelected = new Array<IMachine>();
    @Output()
    selectedMachines = new EventEmitter<Array<IMachine>>();

    constructor(private machineService: MachinesService){
        this.machineService.getAll().subscribe( (machines:Array<IMachine>) => this.machines = machines);
    }

    selectMachines(){
        this.selectedMachines.emit(this.machinesSelected);
    }
}