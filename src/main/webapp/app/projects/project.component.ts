import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {ProjectService} from "./project.service";
import {CProject} from "./CProject";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@Component({
    selector: 'project',
    templateUrl: './app/projects/project.html',
    providers: [ProjectService]
})
export class ProjectComponent implements OnInit{
    project: CProject;

    constructor(private projectsService: ProjectService, private route: ActivatedRoute){
        this.project = new CProject();
    }

    ngOnInit(): void {
        this.route.params.switchMap( (params: Params) => this.projectsService.getProject(+params['id']))
            .subscribe( (project: CProject) => this.project = project);
    }
}