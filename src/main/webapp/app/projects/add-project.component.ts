import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CProject} from "./CProject";
import {Location} from "@angular/common";
import {CMaterial} from "./CMaterial";
import {IMachine} from "../machines/IMachine";
import {CLicence} from "./CLicence";
import {CTheme} from "./CTheme";

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
    /*TODO: collaborators */
    licence:CLicence;
    themes:Array<CTheme>;

    illustration:string;


    constructor(router:Router,form: FormBuilder, private projectsService:ProjectService, private location:Location){
        this.project = new CProject();
        this.employedMaterials=[];
        this.employedMachines=[];
        /*TODO: collaborators */
        this.licence=new CLicence();
        this.themes=[];

        this.router = router;
        this.projectForm = form.group({
            name: ["",Validators.required],
            description: ["",Validators.required],
            tags:""
        });
    }

    addProject(){
        this.project = new CProject();
        this.project.name = "";
        /*TODO: a supprimer ou à modifier lorsque l'upload de fichier sera implementé */
        if(this.illustration == null){
            this.project.illustration = '../assets/img/projects/defaultProject.png';
        }else{
            this.project.illustration = this.illustration;
        }
        /*FIN TODO*/
        /*TODO: collaborators + steps + files */
        this.project.projectsMaterials = this.employedMaterials;
        this.project.projectsMachines = this.employedMachines;
        this.project.idLicence = this.licence.idLicence;
        this.project.projectsThemes = this.themes;

        // this.projectsService.saveProject(this.project).subscribe((project:CProject) => {
        //     this.project = project;
        //     this.router.navigate(['admin/projects/home']);
        // });

    }

    addStep(){

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
}
