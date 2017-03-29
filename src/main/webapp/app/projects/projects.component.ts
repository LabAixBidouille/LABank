import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router} from "@angular/router";
import {CProject} from "./CProject";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@Component({
    selector: 'projects',
    templateUrl: './app/projects/projects.html',
    providers: [ProjectService]
})
export class ProjectsComponent{
    projects:Array<CProject>;
    router:Router;

    constructor(router:Router, projectsService:ProjectService){
        this.projects=[];
        this.router = router;

        projectsService.getAll().subscribe((projects:Array<CProject>) => this.projects = projects);
    }

    showProject(id:number){
        this.router.navigate(['/projects',id]);
    }
}
