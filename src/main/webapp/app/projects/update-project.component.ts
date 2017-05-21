import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CProject} from "./CProject";
import {CMaterial} from "./CMaterial";
import {IMachine} from "../machines/IMachine";
import {CLicence} from "./CLicence";
import {CTheme} from "./CTheme";
import {CStep} from "./CStep";
import {forEach} from "@angular/router/src/utils/collection";
import {ProjectStepsComponent} from "./project-steps.component";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@Component({
    selector: 'update-project',
    templateUrl: './app/projects/update-project.html',
    providers: [ProjectService]
})
export class UpdateProjectComponent implements  OnInit{
    project= new CProject();
    projects:Array<CProject>;
    employedMaterials:Array<CMaterial>;
    employedMachines:Array<IMachine>;
    /*TODO: collaborators */
    licence:CLicence;
    themes:Array<CTheme>;

    steps:Array<CStep>;
    step:CStep;
    order = 0;

    show = true;
    noDelete = false;

    illustration:string;

    @ViewChild("stepContainer", { read: ViewContainerRef }) container;

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private projectService:ProjectService, private resolver: ComponentFactoryResolver){
       this.projects =[];
        this.employedMaterials = [];
        this.employedMachines = [];
        this.licence = new CLicence();
        this.step = new CStep();
        this.illustration = "";

    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.projectService.getProject(+params['id']))
            .subscribe( (project: CProject) => {
                this.project = project;
                this.steps = this.project.projectSteps;
                this.illustration = this.project.illustration;
            } );
    }

    updateProject(){
        /*TODO: a supprimer ou à modifier lorsque l'upload de fichier sera implementé */
        if(this.illustration == null){
            this.project.illustration = '../assets/img/projects/defaultProject.png';
        }else{
            this.project.illustration = this.illustration;
        }
        /*FIN TODO*/

        /*TODO: collaborators + files */
        this.project.projectsMaterials = this.employedMaterials;
        this.project.projectsMachines = this.employedMachines;
        this.project.idLicence = this.licence.idLicence;
        this.project.projectsThemes = this.themes;
        this.project.projectSteps = this.steps;

        this.projectService.updateProject(this.project).subscribe((project:CProject)=>{
            this.project=project;
            this.projectService.getAll().subscribe((projects:Array<CProject>)=> this.projects=projects);
            this.router.navigate(['admin/projects/home']);
        })
    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/events/'+ illustration;
    }

    getStepIllustration(stepIllustration:string){

    }

    getMaterials(employedMaterials:Array<CMaterial>){
        this.employedMaterials = employedMaterials;
    }

    getMachines(employedMachines:Array<IMachine>){
        this.employedMachines = employedMachines;
    }

    getLicence(licence:CLicence){
        this.licence = licence;
    }

    getThemes(themes:Array<CTheme>){
        this.themes = themes;
    }

    goBack(): void {
        this.location.back();
    }

    addStep(){
        let factory= this.resolver.resolveComponentFactory(ProjectStepsComponent);
        let componentRef = this.container.createComponent(factory);
        // componentRef.instance.stepSelected.subscribe( (step:CStep)=>{
        //     // this.step = step;
        //     if(step){
        //         this.order = this.order +1;
        //         step.stepsOrder = this.order;
        //         this.steps.push(step);
        //     }
        //
        // });
    }

    validate(step:CStep){
        if(this.illustration == null){
            step.illustration = '../assets/img/steps/defaultStep.jpg';
        }else{
            step.illustration = this.illustration;
        }
        console.log(step.title);
        this.noDelete = true;
        // this.steps.push(this.step);
    }

    delete(step:CStep){
        this.show = false;
        let stepRemoved = this.steps.splice(this.steps.indexOf(step),1);
        console.log(stepRemoved);
        this.changeOrder(this.steps);
    }

    changeOrder(steps:Array<CStep>){
        let order = 1;
        if(steps){
            for (var i=0; i< steps.length;i++){
                steps[i].stepsOrder = order;
                order = order + 1;
            }
        }
    }
}
