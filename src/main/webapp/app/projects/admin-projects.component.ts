import {Component, OnInit} from "@angular/core";
import {ProjectService} from "./project.service";
import {CProject} from "./CProject";
import {Router} from "@angular/router";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */

@Component({
    selector: 'admin-projects',
    templateUrl: './app/projects/admin-projects.html',
    providers: [ProjectService]
})
export class AdminProjectsComponent implements OnInit{

    projectToDelete: CProject;
    projects: Array<CProject>;

    msg:boolean;

    constructor(private router:Router, private projectsService:ProjectService){
        this.projects = [];
        this.projectToDelete = new CProject();
        this.msg=false;
    }

    ngOnInit(){
        this.projectsService.getAll().subscribe((projects:Array<CProject>)=> this.projects = projects);
    }

    newProject(){
        this.router.navigate(['admin/projects/new']);
    }

    updateProject(id:number){
        this.router.navigate(['admin/projects/', id]);
    }

    deleteProject(id:number){
        this.projectsService.getProject(id).subscribe( (project:CProject) => this.projectToDelete = project );
    }

    delete(){
        this.projectsService.deleteProject(this.projectToDelete.idProject).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.projectsService.getAll().subscribe( (projects:Array<CProject>) => this.projects = projects );
            this.router.navigate(['admin/projects/home']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }
}