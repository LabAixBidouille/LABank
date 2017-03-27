/**
 * Created by kprim on 22/02/2017.
 */
import {Component} from '@angular/core';
import {AccountEventsService} from '../account/account.events.service';
import {LoginService} from '../login/login.service';

@Component({
    selector: 'sidebar',
    templateUrl: './app/sidebar/sidebar.html',
    providers: [LoginService],
})

export class Sidebar {
    isAdmin:boolean;
    authenticated:boolean;
    profile:string;
    loginService:LoginService;
    constructor(accountEventService:AccountEventsService,loginService:LoginService) {
        this.isAdmin = false;
        this.loginService = loginService;
        accountEventService.subscribe((account) => {
            if(!account.authenticated) {
                this.authenticated = false;
                this.loginService.logout(false);
            } else {
                console.log(account.profile);
                this.profile = account.profile.profile;
                this.authenticated = true;
                this.isAdmin = (this.profile == "ADMIN") ? true : false;
            }
        });
    }
}
