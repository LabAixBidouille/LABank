import {IMachine} from "../machines/IMachine";
import {EventEmitter, Output, Component} from "@angular/core";
import {MachinesService} from "../machines/machines.service";
/**
 * Created by Kandel on 31/05/2017.
 */
@Component({
    selector: 'training-machines',
    templateUrl: '../app/training/training-machines.html'
})
export class TrainingMachinesComponent{
    machines:Array<IMachine>;
    machinesSelected =[];
    @Output()
    selectedMachines = new EventEmitter<Array<IMachine>>();

    constructor(private machineService: MachinesService){
        this.machineService.getAll().subscribe((machines:Array<IMachine>) => this.machines = machines);
    }

    selectMachines(){
        this.selectedMachines.emit(this.machinesSelected);
    }
}