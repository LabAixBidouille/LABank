import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UtilsModule} from "../utils/utils.module";

import {ProjectComponent} from "./project.component";
import {ProjectsComponent} from "./projects.component";
import {AdminProjectsComponent} from "./admin-projects.component";
import {AdminProjectsLicencesComponent} from "./admin-projects-licences.component";
import {AdminProjectsMaterialsComponent} from "./admin-projects-materials.component";
import {AdminProjectsThemesComponent} from "./admin-projects-themes.component";
import {AdminProjectsHomeComponent} from "./admin-projects-home.component";
import {AddProjectComponent} from "./add-project.component";
import {UpdateProjectComponent} from "./update-project.component";
import {ProjectService} from "./project.service";

/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule ],
    bootstrap: [ ProjectComponent, ProjectsComponent,  AdminProjectsComponent, AddProjectComponent, UpdateProjectComponent ],
    declarations: [ ProjectComponent, ProjectsComponent, AdminProjectsComponent, AdminProjectsHomeComponent,
        AdminProjectsLicencesComponent, AdminProjectsMaterialsComponent, AdminProjectsThemesComponent,
        AddProjectComponent, UpdateProjectComponent],
    providers: [ ProjectService ]
})
export class ProjectModule{}