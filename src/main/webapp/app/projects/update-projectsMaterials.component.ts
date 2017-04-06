import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CMaterial} from "./CMaterial";
/**
 * Created by Kandel HANAFI on 04/04/2017.
 */
@Component({
    selector: 'update-projectsMaterials',
    templateUrl: './app/projects/update-projectsMaterials.html',
    providers:[ProjectService]
})
export class UpdateProjectsMaterialsComponent{
    material= new CMaterial();
    materials = new Array<CMaterial>();

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private projectsService:ProjectService){
        this.materials=[];
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.projectsService.getMaterial(+params['id']))
            .subscribe( (material: CMaterial) => this.material = material );
    }

    updateMaterial(){
        this.projectsService.updateMaterial(this.material).subscribe((material:CMaterial) => {
            this.material = material;
            this.projectsService.getAllMaterial().subscribe( (materials:Array<CMaterial>) => this.materials = materials );
            this.router.navigate(['/admin/projects/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}