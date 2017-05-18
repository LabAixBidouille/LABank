import {Component, EventEmitter, Output, Input} from "@angular/core";
import {ProjectService} from "./project.service";
import {CStep} from "./CStep";
import {CProject} from "./CProject";
/**
 * Created by Kandel on 17/05/2017.
 */
@Component({
    selector: 'project-steps-list',
    templateUrl: './app/projects/project-steps-list.html',
    providers: [ProjectService]
})
export class ProjectStepsListComponent{
    @Input()
    currentProject:CProject;

    step:CStep;
    steps:Array<CStep>;
    @Output()
    stepSelected = new  EventEmitter<CStep>();

    illustration:string;
    show = true;
    noDelete = false;


    constructor(private projectsService:ProjectService){
        this.show = true;
        this.noDelete = false;
        this.projectsService.getStepsByIdProject(26).subscribe((steps:Array<CStep>)=> this.steps = steps);
    }

    getStepIllustration(illustration:string){
        this.illustration = '../assets/img/steps/'+ illustration;
    }

    validate(){
        if(this.illustration == null){
            this.step.illustration = '../assets/img/steps/defaultStep.jpg';
        }else{
            this.step.illustration = this.illustration;
        }
        this.stepSelected.emit(this.step);
        this.noDelete = true;
    }

    delete(){
        this.show = false;
    }

}