import {Component} from "@angular/core";
import {ProjectService} from "./project.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {CTheme} from "./CTheme";
/**
 * Created by Kandel HANAFI on 04/04/2017.
 */
@Component({
    selector: 'add-projectsThemes',
    templateUrl: './app/projects/add-projectsThemes.html',
    providers: [ProjectService]
})
export class AddProjectsThemesComponent{
    router: Router;
    themeForm:FormGroup;

    theme:CTheme;

    constructor(router:Router,form: FormBuilder, private projectsService:ProjectService, private location:Location){
        this.theme = new CTheme();

        this.router = router;
        this.themeForm = form.group({ name: ['', Validators.required] });
    }

    addTheme(){
        this.theme = new CTheme();
        this.theme.name = this.themeForm.value.name;

        this.projectsService.saveTheme(this.theme).subscribe((theme:CTheme) => {
            this.theme = theme;
            this.router.navigate(['admin/projects/home']);
        });

    }

    goBack(): void {
        this.location.back();
    }
}