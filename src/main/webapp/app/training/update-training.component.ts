import {Component, OnInit, NgZone} from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";
import {IMachine} from "../machines/IMachine";
import {and} from "@angular/router/src/utils/collection";

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
    associatedMachines: Array<IMachine>;

    constructor(private router:Router, private trainingService:TrainingService, private route :ActivatedRoute,
                private location:Location, private _ngZone:NgZone){
            this.trainings=[];
            this.associatedMachines = [];
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
        this.training.associatedMachines = this.training.associatedMachines.concat(this.associatedMachines);
        this.trainingService.updateTraining(this.training).subscribe((training:CTraining) => {
            this.training = training;
            this.trainingService.getAll().subscribe( (trainings:Array<CTraining>) => this.trainings = trainings );
            this.router.navigate(['/admin/trainings']);
        });
    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/trainings/'+ illustration;
    }

    getMachines(machines:Array<IMachine>){
        this.checkDoublon(machines);
        this.associatedMachines = machines;
    }

    checkDoublon(machines:Array<IMachine>){
        let i=0;
        let j=0;
        if(machines){
            while ( i< machines.length){
                j=0;
                while(j<this.training.associatedMachines.length && this.training.associatedMachines[j].id != machines[i].id){
                    j++;
                }
                if(j<this.training.associatedMachines.length && this.training.associatedMachines[j].id == machines[i].id){
                    console.log("BIG TEST");
                    machines.splice(machines.indexOf(machines[i]));
                }
                i++
            }
        }
    }

    deleteMachine(machine:IMachine){
        this.training.associatedMachines.splice(this.training.associatedMachines.indexOf(machine),1);
    }

    goBack(): void {
      this.location.back();
    }
}