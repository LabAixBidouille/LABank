import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
import {CMaterial} from "./CMaterial";
import {Router} from "@angular/router";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@Component({
    selector: 'admin-projectsMaterials',
    templateUrl: './app/projects/admin-projectsMaterials.html',
    providers: [ProjectService]
})
export class AdminProjectsMaterialsComponent{
    materialToDelete: CMaterial;
    materials: Array<CMaterial>;

    msg:boolean;

    constructor(private router:Router, private projectsService:ProjectService){
        this.materials = [];
        this.materialToDelete = new CMaterial();
        this.msg=false;
        this.projectsService.getAllMaterial().subscribe((materials:Array<CMaterial>)=> this.materials = materials);
    }

    newMaterial(){
        this.router.navigate(['admin/projects/materials/new']);
    }

    updateMaterial(id:number){
        this.router.navigate(['admin/projects/materials/', id]);
    }

    deleteMaterial(id:number){
        this.projectsService.getMaterial(id).subscribe( (material:CMaterial) => this.materialToDelete = material );
    }

    delete(){
        this.projectsService.deleteMaterial(this.materialToDelete.idMaterial).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.projectsService.getAllMaterial().subscribe( (materials:Array<CMaterial>) => this.materials = materials );
            this.router.navigate(['admin/projects/home']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }

}