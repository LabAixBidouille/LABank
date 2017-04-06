import {ProjectService} from "./project.service";
import {Component} from "@angular/core";
/**
 * Created by Kandel HANAFI on 06/04/2017.
 */
@Component({
    selector: 'project-collaborators',
    templateUrl: './app/projects/project-collaborator.html',
    providers: [ProjectService]
})
export class ProjectCollaboratorsComponent{


    constructor(){

    }

    selectCollaborators(){

    }
}