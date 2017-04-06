import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router} from "@angular/router";
import {CTheme} from "./CTheme";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@Component({
    selector: 'admin-projectsThemes',
    templateUrl: './app/projects/admin-projectsThemes.html',
    providers: [ProjectService]
})
export class AdminProjectsThemesComponent{
    themeToDelete: CTheme;
    themes: Array<CTheme>;

    msg:boolean;

    constructor(private router:Router, private projectsService:ProjectService){
        this.themes = [];
        this.themeToDelete = new CTheme();
        this.msg=false;
        this.projectsService.getAllTheme().subscribe((themes:Array<CTheme>)=> this.themes = themes);
    }

    newTheme(){
        this.router.navigate(['admin/projects/themes/new']);
    }

    updateTheme(id:number){
        this.router.navigate(['admin/projects/themes/', id]);
    }

    deleteTheme(id:number){
        this.projectsService.getTheme(id).subscribe( (theme:CTheme) => this.themeToDelete = theme );
    }

    delete(){
        this.projectsService.deleteTheme(this.themeToDelete.idTheme).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.projectsService.getAllTheme().subscribe( (themes:Array<CTheme>) => this.themes = themes );
            this.router.navigate(['admin/projects/home']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }
}