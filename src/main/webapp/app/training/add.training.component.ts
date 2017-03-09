import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";

@Component({
    selector: 'add-training',
    templateUrl: './app/training/add-training.html',
    providers: [TrainingService]
})
export class AddTrainingComponent{
    router: Router;
    trainingForm:FormGroup;

    training:CTraining;
    error:string;

    constructor(router:Router,form: FormBuilder, trainingService:TrainingService){
        this.router = router;
        this.trainingForm = form.group({
                name: ['', Validators.required],
                illustration: ['', Validators.required],
                description: ['', Validators.required],
                nbTicket: "",
                display: ['', Validators.required]
            });
    }

    addTraining(){
        /*TODO*/
        this.router.navigate(['/admin/trainings']);
    }
}