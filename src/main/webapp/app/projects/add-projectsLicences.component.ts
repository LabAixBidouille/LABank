
/**
 * Created by Kandel HANAFI on 04/04/2017.
 */
import {Component} from "@angular/core";

import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import { Location } from '@angular/common';
import {CLicence} from "./CLicence";
import {ProjectService} from "./project.service";
@Component({
    selector: 'add-projectsLicences',
    templateUrl: './app/projects/add-projectsLicences.html',
    providers: [ProjectService]
})
export class AddProjectsLicencesComponent {

    router: Router;
    licenceForm:FormGroup;

    licence:CLicence;

    illustration:string;
    error:string;
    display:string;
    test:string;

    constructor(router:Router,form: FormBuilder, private projectsService:ProjectService, private location:Location){
        this.licence = new CLicence();

        this.router = router;
        this.licenceForm = form.group({
            name: ['', Validators.required],
            description: ['', Validators.required]
        });
    }

    addLicence(){
        this.licence = new CLicence();
        this.licence.name = this.licenceForm.value.name;
        this.licence.description = this. licenceForm.value.description ;

        this.projectsService.saveLicence(this.licence).subscribe((licence:CLicence) => {
            this.licence = licence
            this.router.navigate(['admin/projects/home']);
        });

    }

    goBack(): void {
        this.location.back();
    }
}