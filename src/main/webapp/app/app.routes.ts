import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Login} from './login/login';
import {Users} from './users/users';
import {User} from './users/user';
import {Dashboard} from './dashboard/dashboard';
import {Machines} from "./machines/machines";


export const routes:Routes = [
    {path: '', component: Dashboard},
    {path: 'authenticate', component: Login},
    {path: 'machines', component: Machines},
    {path: 'users', component: Users, },
    {path: 'user/:id', component: User,}
];

export const RoutesModule: ModuleWithProviders = RouterModule.forRoot(routes);

