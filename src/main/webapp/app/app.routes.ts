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
    {path: 'training/:id', component: TrainingComponent},
    {path: 'admin/trainings', component: AdminTrainingsComponent},
    {path: 'admin/trainings/new', component: AddTrainingComponent},
    {path: 'admin/trainings/:id', component: UpdateTrainingComponent}

];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);

