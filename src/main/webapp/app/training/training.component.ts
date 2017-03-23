import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {TrainingService} from "./training.service";
import {CTraining} from "./CTraining";

@Component({
    selector: 'training',
    templateUrl: './app/training/training.html'
})
export class TrainingComponent implements OnInit {
    training: CTraining;

    constructor(private trainingService: TrainingService, private route: ActivatedRoute){
        this.training = new CTraining();
    }

    ngOnInit(): void {
        this.route.params.switchMap( (params: Params) => this.trainingService.getTraining(+params['id']))
            .subscribe( (training: CTraining) => this.training = training);
    }
}