import {Component, OnInit, NgZone} from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";

@Component({
    selector: 'update-training',
    templateUrl: './app/training/update-training.html',
    providers: [TrainingService]
})
export class UpdateTrainingComponent implements OnInit{

    training = new CTraining();
    trainings: Array<CTraining>;
    illustration:string;
    error:string;

    constructor(private router:Router, private trainingService:TrainingService, private route :ActivatedRoute,
                private location:Location, private _ngZone:NgZone){
            this.trainings=[];
    }

     ngOnInit(): void {
        this.route.params.switchMap( (params: Params) => this.trainingService.getTraining(+params['id']))
            .subscribe( (training: CTraining) => this.training = training );
    }

    updateTraining(){
        if(this.illustration == null){
            this.training.illustration = '../assets/img/trainings/defaultTraining.jpg';
        }else{
            this.training.illustration = this.illustration;
        }
        this.trainingService.updateTraining(this.training).subscribe((training:CTraining) => {
            this.training = training;
            this.trainingService.getAll().subscribe( (trainings:Array<CTraining>) => this.trainings = trainings );
            this.router.navigate(['/admin/trainings']);
        });
    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/trainings/'+ illustration;
    }

    goBack(): void {
      this.location.back();
    }
}