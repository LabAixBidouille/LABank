import {Component, OnInit} from "@angular/core";
import {ProjectService} from "./project.service";
import {CLicence} from "./CLicence";
import {Router} from "@angular/router";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@Component({
    selector: 'admin-projectsLicences',
    templateUrl: './app/projects/admin-projectsLicences.html',
    providers: [ProjectService]
})
export class AdminProjectsLicencesComponent implements OnInit{

    licenceToDelete: CLicence;
    licences: Array<CLicence>;

    msg:boolean;

    constructor(private router:Router, private projectsService:ProjectService){
        this.licences = [];
        this.licenceToDelete = new CLicence();
        this.msg=false;
    }

    ngOnInit(){
        /*TODO:GetAllLicence*/
    }

    newLicence(){
        this.router.navigate(['admin/projects/licences/new']);
    }

    updateLicence(id:number){
        this.router.navigate(['admin/projects/licences/', id]);
    }

    deleteLicence(id:number){
        this.projectsService.getLicence(id).subscribe( (licence:CLicence) => this.licenceToDelete = licence );
    }

    delete(){
        this.projectsService.deleteLicence(this.licenceToDelete.idLicence).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.projectsService.getAll().subscribe( (licences:Array<CLicence>) => this.licences = licences );
            this.router.navigate(['admin/projects/licences']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }
}