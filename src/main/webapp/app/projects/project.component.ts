import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@Component({
    selector: 'project',
    templateUrl: './app/projects/project.html',
    providers: [ProjectService]
})
export class ProjectComponent{

}