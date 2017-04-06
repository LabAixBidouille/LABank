/**
 * Created by Kandel HANAFI on 04/04/2017.
 */
import {Component} from "@angular/core";

import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import { Location } from '@angular/common';
import {ProjectService} from "./project.service";
import {CMaterial} from "./CMaterial";
@Component({
    selector: 'add-projectsMaterials',
    templateUrl: './app/projects/add-projectsMaterials.html',
    providers: [ProjectService]
})
export class AddProjectsMaterialsComponent {

    router: Router;
    materialForm:FormGroup;

    material:CMaterial;

    constructor(router:Router,form: FormBuilder, private projectsService:ProjectService, private location:Location){
        this.material = new CMaterial();

        this.router = router;
        this.materialForm = form.group({ name: ['', Validators.required] });
    }

    addMaterial(){
        this.material = new CMaterial();
        this.material.name = this.materialForm.value.name;

        this.projectsService.saveMaterial(this.material).subscribe((material:CMaterial) => {
            this.material = material;
            this.router.navigate(['admin/projects/home']);
        });

    }

    goBack(): void {
        this.location.back();
    }
}