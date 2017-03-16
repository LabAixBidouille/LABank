import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import { TrainingsComponent } from "./trainings.component";
import { TrainingComponent } from "./training.component";
import { AdminTrainingsComponent } from "./admin-trainings.component";
import { AddTrainingComponent } from "./add-training.component";
import { UpdateTrainingComponent } from "./update-training.component";
import { TrainingService } from "./training.service";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule],
    declarations:[TrainingsComponent, TrainingComponent, AdminTrainingsComponent, AddTrainingComponent, UpdateTrainingComponent],
    bootstrap: [TrainingsComponent, TrainingComponent, AdminTrainingsComponent, AddTrainingComponent, UpdateTrainingComponent],
    providers: [TrainingService]
})
export class TrainingModule{}