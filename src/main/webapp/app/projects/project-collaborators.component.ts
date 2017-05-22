import {ProjectService} from "./project.service";
import {Component, Output, EventEmitter} from "@angular/core";
import {UsersService} from "../users/users.service";
import {Account} from "../account/account";
/**
 * Created by Kandel HANAFI on 06/04/2017.
 */
@Component({
    selector: 'project-collaborators',
    templateUrl: './app/projects/project-collaborator.html',
    providers: [ProjectService]
})
export class ProjectCollaboratorsComponent{
    collaborators:Array<Account>;
    collaboratorsSelected = new Array<Account>();
    @Output()
    selectedCollaborators = new EventEmitter<Array<Account>>();

    constructor(private usersService: UsersService){
        this.usersService.getAll().subscribe((collaborators:Array<Account>)=> this.collaborators = collaborators);
    }

    selectCollaborators(){
        this.selectedCollaborators.emit(this.collaboratorsSelected);
    }
}