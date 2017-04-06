import {Component, Output, EventEmitter, Input} from "@angular/core";
import {CStep} from "./CStep";
import {ProjectService} from "./project.service";
/**
 * Created by Kandel HANAFI on 30/03/2017.
 */
@Component({
    selector: 'project-steps',
    templateUrl: './app/projects/project-step.html',
    providers: [ProjectService]
})
export class ProjectStepsComponent{
    steps:Array<CStep>;
    step = new CStep();
    @Output()
    stepSelected = new  EventEmitter<CStep>();

    constructor(private projectsService:ProjectService){
        this.projectsService.getAllStep().subscribe((steps:Array<CStep>)=> this.steps = steps);
    }


}