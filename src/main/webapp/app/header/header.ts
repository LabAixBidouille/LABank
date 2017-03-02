import {Component} from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {Account} from '../account/account';
import {AccountEventsService} from '../account/account.events.service';

///<reference path="../../../../../typings/lodash/lodash.d.ts" />

@Component({
    selector: 'headerbar',
    templateUrl: './app/header/header.html',
    providers: [LoginService],
})
export class Header {
    /**Proprietes**/
    authenticated:boolean;
    loginService:LoginService;
    username:string;
    password:string;
    router:Router;
    wrongCredentials:boolean;
    loginForm:FormGroup;
    account:Account;
    error:string;

    closeLoginModal: boolean;

    /** Constructeur **/
    constructor(router: Router,form: FormBuilder, accountEventService:AccountEventsService,loginService:LoginService) {
        this.router = router;
        this.wrongCredentials = false;
        this.loginForm = form.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.loginService = loginService;
        this.closeLoginModal = false;

        accountEventService.subscribe((account) => {
            if(!account.authenticated) {

                if(account.error) {
                    if(account.error.indexOf('BadCredentialsException') !== -1) {
                        this.error = 'Login ou mot de passe invalide !';
                    } else {
                        this.error = account.error;
                    }
                }
                this.closeLoginModal = false;
            } else {
                this.authenticated = true;
            }

        });
    }

    /** Methodes **/

    logout(event:Event):void {
        event.preventDefault();
        this.loginService.logout();
    }

    authenticate(event) {
        console.log('test');
        event.preventDefault();
        this.loginService.authenticate(this.loginForm.value.username,this.loginForm.value.password).subscribe(account => {
            this.account = account;
            console.log('Successfully logged',account);
            this.router.navigate(['']);
            this.closeLoginModal = true;
        });

    }

}
