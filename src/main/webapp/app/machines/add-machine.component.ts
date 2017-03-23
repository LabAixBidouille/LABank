import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";

import {MachinesService} from "./machines.service";
import {IMachine} from "./IMachine";

/**
 * Created by Kandel HANAFI on 17/03/2017.
 */
@Component({
    selector: 'add-machine',
    templateUrl : './app/machines/add-machine.html',
    providers : [MachinesService]
})
export class AddMachineComponent{

    machine:IMachine;
    machineForm:FormGroup;

    illustration:string;

    constructor(private router:Router, private form:FormBuilder, private machinesService:MachinesService,
                private location:Location){

        this.machine = new IMachine();
        this.machineForm = this.form.group({
            name: ['', Validators.required] ,
            description: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(750)])],
            specification: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(750)])],
            illustration: ""
        });
    }

    addMachine(){
        this.machine = new IMachine();
        this.machine.name = this.machineForm.value.name;
        this.machine.description = this.machineForm.value.description;
        this.machine.specification = this.machineForm.value.specification;
        if(this.illustration == null){
            this.machine.illustration = '../assets/img/machines/DefaultMachine.png';
        }else{
            this.machine.illustration = this.illustration;
        }
        this.machinesService.saveMachine(this.machine).subscribe((machine:IMachine) => {
            this.machine = machine;
            this.router.navigate(['/admin/machines']);
        });


    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/machines/'+ illustration;
    }

    goBack(): void {
        this.location.back();
    }
}