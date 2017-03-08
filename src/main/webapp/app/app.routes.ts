import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Login} from './login/login';
import {Users} from './users/users';
import {User} from './users/user';
import {Dashboard} from './dashboard/dashboard';
import {Machines} from "./machines/machines";
import {SignUpComponent} from './signup/sign-up.component';
import {TrainingsComponent} from './training/trainings.component';
import {TrainingComponent} from './training/training.component';
import {Events} from "./events/events";
import {EventComponent} from './events/event.component';
import {EventType} from "./events/eventtype";
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
    {path: 'training/:id', component: TrainingComponent}
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);

