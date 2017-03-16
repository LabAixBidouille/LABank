import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import 'rxjs/add/operator/switchMap';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";

@Component({
    selector: 'update-training',
    templateUrl: './app/training/update-training.html',
    providers: [TrainingService]
})
export class UpdateTrainingComponent implements OnInit{
    router: Router;
    trainingForm:FormGroup;

    training = new CTraining();
    illustration:string;
    error:string;

    constructor(router:Router,form: FormBuilder, private trainingService:TrainingService, private route :ActivatedRoute,
        private location:Location){
            this.router = router;
            this.trainingForm = form.group({
                    name: ['', Validators.required],
                    illustration: ['', Validators.required],
                    description: ['', Validators.required],
                    nbTicket: "",
                    display: ['', Validators.required]
                });
    }

     ngOnInit(): void {
        this.route.params.switchMap( (params: Params) => this.trainingService.getTraining(+params['id']))
            .subscribe( (training: CTraining) => {this.training = training;
                                                console.log(this.training.display); });
    }

    updateTraining(){
        this.training.illustration = this.illustration;
        this.trainingService.updateTraining(this.training).subscribe((training:CTraining) => this.training = training);

        this.router.navigate(['/admin/trainings']);
    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/training/'+ illustration;
    }

    goBack(): void {
      this.location.back();
    }
}