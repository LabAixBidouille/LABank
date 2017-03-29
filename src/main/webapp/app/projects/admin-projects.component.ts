import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */

@Component({
    selector: 'admin-projects',
    templateUrl: './app/projects/admin-projects.html',
    providers: [ProjectService]
})
export class AdminProjectsComponent{

}