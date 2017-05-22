import {
    Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory,
    ComponentRef
} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CProject} from "./CProject";
import {Location} from "@angular/common";
import {CMaterial} from "./CMaterial";
import {IMachine} from "../machines/IMachine";
import {CLicence} from "./CLicence";
import {CTheme} from "./CTheme";
import {ProjectStepsComponent} from "./project-steps.component";
import {CStep} from "./CStep";
import {Account} from "../account/account";

/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@Component({
    selector: 'add-project',
    templateUrl: './app/projects/add-project.html',
    providers: [ProjectService]
})
export class AddProjectComponent{


    router: Router;
    projectForm:FormGroup;

    project:CProject;
    employedMaterials:Array<CMaterial>;
    employedMachines:Array<IMachine>;
    collaborators:Array<Account>;
    licence:CLicence;
    themes:Array<CTheme>;
    steps:Array<CStep>;
    step:CStep;
    order = 0;

    illustration:string;

    @ViewChild("stepContainer", { read: ViewContainerRef }) container;

    constructor(router:Router,form: FormBuilder, private projectsService:ProjectService,
                private location:Location, private resolver: ComponentFactoryResolver){
        this.project = new CProject();
        this.employedMaterials=[];
        this.employedMachines=[];
        this.collaborators = [];
        this.licence=new CLicence();
        this.themes=[];
        this.steps = [];
        this.step = new CStep();

        this.router = router;
        this.projectForm = form.group({
            name: ["",Validators.required],
            description: ["",Validators.required],
            tags:""
        });
    }

    addProject(){
        this.project = new CProject();
        this.project.name = this.projectForm.value.name;
        /*TODO: a supprimer ou à modifier lorsque l'upload de fichier sera implementé */
        if(this.illustration == null){
            this.project.illustration = '../assets/img/projects/defaultProject.jpg';
        }else{
            this.project.illustration = this.illustration;
        }
        /*FIN TODO*/
        this.project.description = this.projectForm.value.description;
        /*TODO: files */
        this.project.projectSteps = this.steps
        this.project.projectsMaterials = this.employedMaterials;
        this.project.projectsMachines = this.employedMachines;
        this.project.collaborators = this.collaborators;
        this.project.idLicence = this.licence.idLicence;
        this.project.projectsThemes = this.themes;
        this.project.tags = this.projectForm.value.tags;
        this.projectsService.saveProject(this.project).subscribe((project:CProject) => {
            this.project = project;
            this.router.navigate(['admin/projects/home']);
        });

    }

    addStep(){
        let factory= this.resolver.resolveComponentFactory(ProjectStepsComponent);
        let componentRef = this.container.createComponent(factory);
        componentRef.instance.stepSelected.subscribe( (step:CStep)=>{
            // this.step = step;
            if(step){
                this.order = this.order +1;
                step.stepsOrder = this.order;
                this.steps.push(step);
            }

        });
    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/events/'+ illustration;
    }

    getMaterials(employedMaterials:Array<CMaterial>){
        this.employedMaterials = employedMaterials;
    }

    getMachines(employedMachines:Array<IMachine>){
        this.employedMachines = employedMachines;
    }

    getCollaborators(collaborators:Array<Account>){
        this.collaborators = collaborators;
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
}
