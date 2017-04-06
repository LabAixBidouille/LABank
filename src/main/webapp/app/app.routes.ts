import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {Users} from './users/users';
import {User} from './users/user';

import {Dashboard} from './dashboard/dashboard';
import {Login} from './login/login';
import {SignUpComponent} from './signup/sign-up.component';

import {TrainingsComponent} from './training/trainings.component';
import {TrainingComponent} from './training/training.component';
import {AdminTrainingsComponent} from './training/admin-trainings.component';
import {AddTrainingComponent} from './training/add-training.component';
import {UpdateTrainingComponent} from './training/update-training.component';


import {Events} from "./events/events";
import {EventComponent} from './events/event.component';
import {EventType} from "./events/eventtype";
import {EventTypesSelectComponent} from "./events/event-types-select.component";
import {EventRecurrencesComponent} from "./events/event-recurrences.component";
import {AdminEventsHomeComponent} from './events/admin-events-home.component';
import {AdminEventsFiltersComponent} from './events/admin-events-filters.component';
import {AdminEventsPricesComponent} from './events/admin-events-prices.component';
import {AdminEventsComponent} from './events/admin-events.component';
import {AddEventComponent} from './events/add-event.component';
import {UpdateEventComponent} from './events/update-event.component';

import {Machines} from "./machines/machines";
import {Machine} from "./machines/machine";
import {AdminMachinesComponent} from './machines/admin-machines.component';
import {AddMachineComponent} from './machines/add-machine.component';
import {UpdateMachineComponent} from './machines/update-machine.component';

import {ProjectComponent} from "./projects/project.component";
import {ProjectsComponent} from './projects/projects.component';
import {ProjectStepsComponent} from "./projects/project-steps.component";
import {ProjectMaterialsComponent} from "./projects/project-materials.component";
import {ProjectMachinesComponent} from "./projects/project-machines.component";
import {ProjectThemesComponent} from "./projects/project-themes.component";
import {ProjectCollaboratorsComponent} from "./projects/project-collaborators.component";
import {ProjectLicencesComponent} from "./projects/project-licences.component";
import {AdminProjectsHomeComponent} from './projects/admin-projects-home.component';
import {AdminProjectsLicencesComponent} from './projects/admin-projects-licences.component';
import {AddProjectsLicencesComponent} from './projects/add-projectsLicences.component';
import {UpdateProjectsLicencesComponent} from './projects/update-projectsLicences.component';
import {AdminProjectsMaterialsComponent} from './projects/admin-projects-materials.component';
import {AddProjectsMaterialsComponent} from './projects/add-projectsMaterials.component';
import {UpdateProjectsMaterialsComponent} from './projects/update-projectsMaterials.component';
import {AdminProjectsThemesComponent} from './projects/admin-projects-themes.component';
import {AddProjectsThemesComponent} from './projects/add-projectsThemes.component';
import {UpdateProjectsThemesComponent} from './projects/update-projectsThemes.component';
import {AdminProjectsComponent} from './projects/admin-projects.component';
import {AddProjectComponent} from './projects/add-project.component';
import {UpdateProjectComponent} from './projects/update-project.component';


export const routes:Routes = [
    {path: 'users', component: Users, },
    {path: 'user/:id', component: User,},

    {path: '', component: Dashboard},
    {path: 'authenticate', component: Login},
    {path: 'signUp', component: SignUpComponent},

    {path: 'machines/:id', component: Machine},
    {path: 'machines', component: Machines},
    {path: 'admin/machines', component: AdminMachinesComponent},
    {path: 'admin/machines/new', component: AddMachineComponent},
    {path: 'admin/machines/:id', component: UpdateMachineComponent},

    {path: 'events/:id', component: EventComponent},
    {path: 'events/cat/:id', component: Events},
    {path: 'eventtype', component: EventType},
    {path: 'event-types-select', component: EventTypesSelectComponent},
    {path: 'event-recurrences', component: EventRecurrencesComponent},
    {path: 'admin/events/home', component: AdminEventsHomeComponent},
    {path: 'admin/events', component: AdminEventsComponent},
    {path: 'admin/events/new', component: AddEventComponent},
    {path: 'admin/events/:id', component: UpdateEventComponent},
    {path: 'admin/events/filters', component: AdminEventsFiltersComponent},
    {path: 'admin/events/prices', component: AdminEventsPricesComponent},

    {path: 'trainings', component: TrainingsComponent},
    {path: 'trainings/:id', component: TrainingComponent},
    {path: 'admin/trainings', component: AdminTrainingsComponent},
    {path: 'admin/trainings/new', component: AddTrainingComponent},
    {path: 'admin/trainings/:id', component: UpdateTrainingComponent},

    {path: 'projects/:id', component: ProjectComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'project-steps', component: ProjectStepsComponent},
    {path: 'project-materials', component: ProjectMaterialsComponent},
    {path: 'project-machines', component: ProjectMachinesComponent},
    {path: 'project-themes', component: ProjectThemesComponent},
    {path: 'project-collaborators', component: ProjectCollaboratorsComponent},
    {path: 'project-licences', component: ProjectLicencesComponent},
    {path: 'admin/projects/home', component: AdminProjectsHomeComponent},
    {path: 'admin/projects', component: AdminProjectsComponent},
    {path: 'admin/projects/new', component: AddProjectComponent},
    {path: 'admin/projects/:id', component: UpdateProjectComponent},
    {path: 'admin/projects/licences', component: AdminProjectsLicencesComponent},
    {path: 'admin/projects/licences/new', component: AddProjectsLicencesComponent},
    {path: 'admin/projects/licences/:id', component: UpdateProjectsLicencesComponent},
    {path: 'admin/projects/materials', component: AdminProjectsMaterialsComponent},
    {path: 'admin/projects/materials/new', component: AddProjectsMaterialsComponent},
    {path: 'admin/projects/materials/:id', component: UpdateProjectsMaterialsComponent},
    {path: 'admin/projects/themes', component: AdminProjectsThemesComponent},
    {path: 'admin/projects/themes/new', component: AddProjectsThemesComponent},
    {path: 'admin/projects/themes/:id', component: UpdateProjectsThemesComponent}

];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);

