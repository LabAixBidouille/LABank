import {CLicence} from "./CLicence";
import {ProjectService} from "./project.service";
import {EventEmitter, Output, Component} from "@angular/core";
/**
 * Created by Kandel HANAFI on 06/04/2017.
 */
@Component({
    selector: 'project-licences',
    templateUrl: './app/projects/project-licence.html',
    providers: [ProjectService]
})
export class ProjectLicencesComponent{
    licences:Array<CLicence>;
    licenceSelected  = new CLicence();
    @Output()
    selectedLicence = new EventEmitter<CLicence>();

    constructor(private projectService: ProjectService){
        this.projectService.getAllLicence().subscribe( (licences:Array<CLicence>) => this.licences = licences);
    }

    selectLicence(){
        this.selectedLicence.emit(this.licenceSelected);
    }
}