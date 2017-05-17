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
    @Input()
    step = new CStep();
    @Output()
    stepSelected = new  EventEmitter<CStep>();
    illustration:string;
    show = true;
    noDelete = false;


    constructor(private projectsService:ProjectService){
        this.show = true;
        this.noDelete = false;
        this.projectsService.getAllStep().subscribe((steps:Array<CStep>)=> this.steps = steps);
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