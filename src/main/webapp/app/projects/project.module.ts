import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {UtilsModule} from "../utils/utils.module";

import {ProjectComponent} from "./project.component";
import {ProjectsComponent} from "./projects.component";
import {ProjectStepsComponent} from "./project-steps.component";
import {ProjectMaterialsComponent} from "./project-materials.component";
import {ProjectMachinesComponent} from "./project-machines.component";
import {ProjectThemesComponent} from "./project-themes.component";
import {ProjectCollaboratorsComponent} from "./project-collaborators.component";
import {ProjectLicencesComponent} from "./project-licences.component";

import {AdminProjectsHomeComponent} from "./admin-projects-home.component";

import {AdminProjectsComponent} from "./admin-projects.component";
import {AddProjectComponent} from "./add-project.component";
import {UpdateProjectComponent} from "./update-project.component";


import {AdminProjectsLicencesComponent} from "./admin-projects-licences.component";
import {AddProjectsLicencesComponent} from "./add-projectsLicences.component";
import {UpdateProjectsLicencesComponent} from "./update-projectsLicences.component";

import {AdminProjectsMaterialsComponent} from "./admin-projects-materials.component";
import {AddProjectsMaterialsComponent} from "./add-projectsMaterials.component";
import {UpdateProjectsMaterialsComponent} from "./update-projectsMaterials.component";

import {AdminProjectsThemesComponent} from "./admin-projects-themes.component";
import {AddProjectsThemesComponent} from "./add-projectsThemes.component";
import {UpdateProjectsThemesComponent} from "./update-projectsThemes.component";

import {ProjectService} from "./project.service";
import {ProjectStepsListComponent} from "./project-steps-list.component";

/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
@NgModule({
    entryComponents: [ProjectStepsComponent],
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule, UtilsModule ],
    bootstrap: [ ProjectComponent, ProjectsComponent,  AdminProjectsComponent, AddProjectComponent, UpdateProjectComponent ],
    declarations: [ ProjectComponent, ProjectsComponent, AdminProjectsComponent, AdminProjectsHomeComponent,
        AdminProjectsLicencesComponent, AddProjectsLicencesComponent, UpdateProjectsLicencesComponent,
        AdminProjectsMaterialsComponent, AddProjectsMaterialsComponent, UpdateProjectsMaterialsComponent,
        AdminProjectsThemesComponent, AddProjectsThemesComponent, UpdateProjectsThemesComponent, AddProjectComponent,
        UpdateProjectComponent, ProjectStepsComponent, ProjectMaterialsComponent, ProjectMachinesComponent,
        ProjectThemesComponent, ProjectCollaboratorsComponent, ProjectLicencesComponent, ProjectStepsListComponent],
    providers: [ ProjectService ]
})
export class ProjectModule{}