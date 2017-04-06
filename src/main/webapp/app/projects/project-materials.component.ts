import {ProjectService} from "./project.service";
import {Component, EventEmitter, Output} from "@angular/core";
import {CMaterial} from "./CMaterial";
/**
 * Created by Kandel HANAFI on 06/04/2017.
 */
@Component({
    selector: 'project-materials',
    templateUrl: './app/projects/project-material.html',
    providers: [ProjectService]
})
export class ProjectMaterialsComponent{
    materials:Array<CMaterial>;
    materialsSelected = new Array<CMaterial>();
    @Output()
    selectedMaterials = new EventEmitter<Array<CMaterial>>();

    constructor(private projectService:ProjectService){
        this.projectService.getAllMaterial().subscribe( (materials:Array<CMaterial>) => this.materials = materials);
    }

    selectMaterials(){
        this.selectedMaterials.emit(this.materialsSelected);
    }
}