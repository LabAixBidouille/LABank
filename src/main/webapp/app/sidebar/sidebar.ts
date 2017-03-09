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
    authenticated:boolean;
    profile:string;
    loginService:LoginService;
    constructor(accountEventService:AccountEventsService,loginService:LoginService) {
        this.loginService = loginService;
        accountEventService.subscribe((account) => {
            if(!account.authenticated) {
                this.authenticated = false;
                this.loginService.logout(false);
                this.profile = "";
            } else {
                console.log(account.profile);
                this.profile = account.profile.profile;
                this.authenticated = true;
            }
        });
    }
}
