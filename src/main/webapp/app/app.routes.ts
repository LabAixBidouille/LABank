import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {Users} from './users/users';
import {User} from './users/user';

import {Dashboard} from './dashboard/dashboard';
import {Login} from './login/login';
import {SignUpComponent} from './signup/sign-up.component';

import {TrainingsComponent} from './training/trainings.component';
import {TrainingComponent} from './training/training.component';
import {AdminTrainingsComponent} from './training/admin.trainings.component';
import {AddTrainingComponent} from './training/add.training.component';
import {UpdateTrainingComponent} from './training/update.training.component';


import {Events} from "./events/events";
import {EventComponent} from './events/event.component';
import {EventType} from "./events/eventtype";

import {Machines} from "./machines/machines";
import {Machine} from "./machines/machine";

export const routes:Routes = [
    {path: '', component: Dashboard},
    {path: 'authenticate', component: Login},
    {path: 'machines/:id', component: Machine},
    {path: 'machines', component: Machines},
    {path: 'events/:id', component: EventComponent},
    {path: 'events/cat/:id', component: Events},
    {path: 'eventtype', component: EventType},
    {path: 'users', component: Users, },
    {path: 'user/:id', component: User,},
    {path: 'signUp', component: SignUpComponent},
    {path: 'trainings', component: TrainingsComponent},
    {path: 'training/:id', component: TrainingComponent},
    {path: 'admin/trainings', component: AdminTrainingsComponent},
    {path: 'admin/trainings/new', component: AddTrainingComponent},
    {path: 'admin/trainings/:id', component: UpdateTrainingComponent}

];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);

