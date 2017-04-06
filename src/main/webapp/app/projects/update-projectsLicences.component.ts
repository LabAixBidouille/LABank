import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CLicence} from "./CLicence";
/**
 * Created by Kandel HANAFI on 04/04/2017.
 */
@Component({
    selector: 'update-projectsLicences',
    templateUrl: './app/projects/update-projectsLicences.html',
    providers: [ProjectService]
})
export class UpdateProjectsLicencesComponent{

    licence= new CLicence();
    licences = new Array<CLicence>();

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private projectsService:ProjectService){
        this.licences=[];
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.projectsService.getLicence(+params['id']))
            .subscribe( (licence: CLicence) => this.licence = licence );
    }

    updateLicence(){
        this.projectsService.updateLicence(this.licence).subscribe((licence:CLicence) => {
            this.licence = licence;
            this.projectsService.getAllLicence().subscribe( (licences:Array<CLicence>) => this.licences = licences );
            this.router.navigate(['/admin/projects/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }

}
