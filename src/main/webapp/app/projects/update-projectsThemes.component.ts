import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CTheme} from "./CTheme";
/**
 * Created by Kandel HANAFI on 04/04/2017.
 */
@Component({
    selector: 'update-projectsThemes',
    templateUrl: './app/projects/update-projectsThemes.html',
    providers:[ProjectService]
})
export class UpdateProjectsThemesComponent{
    theme= new CTheme();
    themes = new Array<CTheme>();

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private projectsService:ProjectService){
        this.themes=[];
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.projectsService.getTheme(+params['id']))
            .subscribe( (theme: CTheme) => this.theme = theme );
    }

    updateTheme(){
        this.projectsService.updateTheme(this.theme).subscribe((theme:CTheme) => {
            this.theme = theme;
            this.projectsService.getAllTheme().subscribe( (themes:Array<CTheme>) => this.themes = themes );
            this.router.navigate(['/admin/projects/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}