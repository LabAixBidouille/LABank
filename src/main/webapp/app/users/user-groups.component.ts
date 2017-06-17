import {Component, Output, EventEmitter} from "@angular/core";
import {CGroup} from "./CGroup";
import {UsersService} from "./users.service";
/**
 * Created by Kandel on 22/05/2017.
 */
@Component({
    selector: "user-groups",
    templateUrl: "../app/users/user-groups.html",
    providers:[UsersService]
})
export class UserGroupsComponent{
    groups:Array<CGroup>;
    groupSelected=new CGroup();
    @Output()
    selectedGroup = new EventEmitter<CGroup>();

    constructor(private usersService:UsersService){
        this.usersService.getAllGroups().subscribe((groups:Array<CGroup>)=> this.groups = groups);
    }

    selectGroup(){
        this.selectedGroup.emit(this.groupSelected);
    }
}
