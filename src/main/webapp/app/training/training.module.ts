import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { UtilsModule } from '../utils/utils.module';

import { TrainingsComponent } from "./trainings.component";
import { TrainingComponent } from "./training.component";
import { TrainingService } from "./training.service";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule],
    declarations:[TrainingsComponent, TrainingComponent],
    bootstrap: [TrainingsComponent, TrainingComponent],
    providers: [TrainingService]
})
export class TrainingModule{}