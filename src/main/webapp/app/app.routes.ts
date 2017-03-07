import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Login} from './login/login';
import {Users} from './users/users';
import {User} from './users/user';
import {Dashboard} from './dashboard/dashboard';
import {Machines} from "./machines/machines";
import {Events} from "./events/events";
import {EventType} from "./events/eventtype";
import {Machine} from "./machines/machine";

export const routes:Routes = [
    {path: '', component: Dashboard},
    {path: 'authenticate', component: Login},
    {path: 'machines/:id', component: Machine},
    {path: 'machines', component: Machines},
    {path: 'events', component: EventType},
    {path: 'eventslist', component: Events},
    {path: 'users', component: Users, },
    {path: 'user/:id', component: User,}
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);

