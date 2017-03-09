import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";

@Component({
    selector: 'admin-trainings',
    templateUrl: './app//training/admin-trainings.html',
    providers: [TrainingService]
})
export class AdminTrainingsComponent{

    trainings: Array<CTraining>;
    router: Router;

    constructor(router:Router, trainingService:TrainingService){
        this.trainings = [];
        this.router = router;
        trainingService.getAll().subscribe( (trainings:Array<CTraining>) => this.trainings = trainings );
    }

    newTraining(){
        this.router.navigate(['admin/trainings/new']);
    }

    updateTraining(id:number){

    }

    deleteTraining(training:CTraining){

    }
}