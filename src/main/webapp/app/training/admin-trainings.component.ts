import {Component, NgZone} from '@angular/core';
import {Router} from '@angular/router';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";

@Component({
    selector: 'admin-trainings',
    templateUrl: './app//training/admin-trainings.html',
    providers: [TrainingService]
})
export class AdminTrainingsComponent{

    trainingToDelete: CTraining;
    trainings: Array<CTraining>;
    router: Router;

    msg:boolean;

    constructor(router:Router, private trainingService:TrainingService, private _ngZone:NgZone){
        this.trainings = [];
        this.trainingToDelete = new CTraining();
        this.msg=false;
        this.router = router;
        trainingService.getAll().subscribe( (trainings:Array<CTraining>) => {
            this.trainings = trainings;
            console.log(this.trainings.length);
        } );

    }

    newTraining(){
        this.router.navigate(['admin/trainings/new']);
    }

    updateTraining(id:number){
        this.router.navigate(['admin/trainings/', id]);
    }

    deleteTraining(id:number){
        this.trainingService.getTraining(id).subscribe( (training:CTraining) => this.trainingToDelete = training );
    }

    delete(){
        this.trainingService.deleteTraining(this.trainingToDelete.id).subscribe( (msg:boolean) =>{
            this.msg = msg;
            this.trainingService.getAll().subscribe( (trainings:Array<CTraining>) => this.trainings = trainings );
            this.router.navigate(['admin/trainings']);
        });
    }

    closeAlert(){
        this.msg = false;
    }
}