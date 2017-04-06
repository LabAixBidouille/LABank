import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {ProjectService} from "./project.service";
import {CProject} from "./CProject";
import {CLicence} from "./CLicence";
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
    licence:CLicence;

    constructor(private projectsService: ProjectService, private route: ActivatedRoute){
        this.project = new CProject();
        this.licence = new CLicence();
    }

    ngOnInit(): void {
        this.route.params.switchMap( (params: Params) => this.projectsService.getProject(+params['id']))
            .subscribe( (project: CProject) => {
                this.project = project;
                this.projectsService.getLicence(this.project.idLicence).subscribe((licence:CLicence)=>this.licence=licence);
            });
    }
}