import {Component, OnInit} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CProject} from "./CProject";
import {CMaterial} from "./CMaterial";
import {IMachine} from "../machines/IMachine";
import {CLicence} from "./CLicence";
import {CTheme} from "./CTheme";
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

    illustration:string;

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private projectService:ProjectService){
       this.projects =[];
        this.employedMaterials = [];
        this.employedMachines = [];
        this.licence = new CLicence();
        this.illustration = "";

    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.projectService.getProject(+params['id']))
            .subscribe( (project: CProject) => {
                this.project = project;
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

        /*TODO: collaborators + steps + files */
        this.project.projectsMaterials = this.employedMaterials;
        this.project.projectsMachines = this.employedMachines;
        this.project.idLicence = this.licence.idLicence;
        this.project.projectsThemes = this.themes;

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
}
