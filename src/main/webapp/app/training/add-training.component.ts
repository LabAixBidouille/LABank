import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import { Location } from '@angular/common';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";
import {IMachine} from "../machines/IMachine";

@Component({
    selector: 'add-training',
    templateUrl: './app/training/add-training.html',
    providers: [TrainingService]
})
export class AddTrainingComponent{
    router: Router;
    trainingForm:FormGroup;

    training:CTraining;
    illustration:string;
    associatedMachines:Array<IMachine>;
    error:string;

    constructor(router:Router,form: FormBuilder, private trainingService:TrainingService, private location:Location){
        this.router = router;
        this.associatedMachines=[];

        this.trainingForm = form.group({
                name: ['', Validators.required],
                illustration: "",
                description: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(750)])],
                nbTicket: "",
                display: ['', Validators.required]
            });
    }

    addTraining(){
        this.training = new CTraining();
        this.training.name = this.trainingForm.value.name;
        if(this.illustration == null){
            this.training.illustration = '../assets/img/trainings/defaultTraining.jpg';
        }else{
            this.training.illustration = this.illustration;
        }
        this.training.description = this.trainingForm.value.description;
        this.training.nbTicket = this.trainingForm.value.nbTicket;
        this.training.display = this.trainingForm.value.display;
        this.training.associatedMachines = this.associatedMachines;

        this.trainingService.saveTraining(this.training).subscribe((training:CTraining) => {
            this.training = training;
            this.router.navigate(['/admin/trainings']);
        });


    }

    getIllustration(illustration:any){
        this.illustration = '../assets/img/trainings/'+ illustration;
    }

    getMachines(machines:Array<IMachine>){
        this.associatedMachines = machines;
    }

    goBack(): void {
      this.location.back();
    }


}