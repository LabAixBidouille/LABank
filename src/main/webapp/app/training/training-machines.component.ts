import {IMachine} from "../machines/IMachine";
import {EventEmitter, Output, Component, Inject, OnInit} from "@angular/core";
import {MachinesService} from "../machines/machines.service";
import {JQ_TOKEN} from "../utils/JQuery.service";
/**
 * Created by Kandel on 31/05/2017.
 */
@Component({
    selector: 'training-machines',
    templateUrl: '../app/training/training-machines.html'
})


export class TrainingMachinesComponent implements OnInit {


    machines:Array<IMachine>;
    machinesSelected =[];
    @Output()
    selectedMachines = new EventEmitter<Array<IMachine>>();


    constructor(@Inject(JQ_TOKEN) private $: any,private machineService: MachinesService){
        this.machineService.getAll().subscribe((machines:Array<IMachine>) => this.machines = machines);
    }


    ngOnInit(): void {
        this.$("#machinesSelect").select2();
    }

    selectMachines(){
        this.selectedMachines.emit(this.machinesSelected);
    }
}