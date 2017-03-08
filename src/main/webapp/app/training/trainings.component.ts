import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";


@Component({
    selector: 'trainings',
    templateUrl: './app/training/trainings.html',
    providers: [TrainingService]
})
export class TrainingsComponent {
    trainings: Array<CTraining>;
    router: Router;

    constructor (router: Router, trainingService: TrainingService){
        this.trainings = [];
        this.router = router;
        trainingService.getAll().subscribe( (trainings:Array<CTraining>) => this.trainings = trainings );
    }

    showTraining(id:number): void{
        this.router.navigate(['/training',id]);
    }

}