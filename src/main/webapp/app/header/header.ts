import {Component} from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {Account} from '../account/account';
import {AccountEventsService} from '../account/account.events.service';
import{UsersService} from '../users/users.service';

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
    loginForm:FormGroup;

    usersService:UsersService
    firstName:string;
    lastName:string;
    pseudonym:string;
    pwd:string;
    group:string;
    birthday:string;
    phone:string;
    signUpForm:FormGroup;

    router:Router;
    wrongCredentials:boolean;
    account:Account;
    error:string;

    closeModal: boolean;

    /** Constructeur **/
    constructor(router: Router,form: FormBuilder, accountEventService:AccountEventsService,loginService:LoginService,
        usersService:UsersService) {
        this.router = router;
        this.wrongCredentials = false;
        this.loginForm = form.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.loginService = loginService;
        this.usersService= usersService;
        this.closeModal = false;

        accountEventService.subscribe((account) => {
            if(!account.authenticated) {

                if(account.error) {
                    if(account.error.indexOf('BadCredentialsException') !== -1) {
                        this.error = 'Login ou mot de passe invalide !';
                    } else {
                        this.error = account.error;
                    }
                }
                this.closeModal = false;
            } else {
                this.authenticated = true;
            }

        });
    }

    /** Methodes **/

    logout(event:Event):void {
        event.preventDefault();
        this.authenticated = false;
        this.loginService.logout();
    }

    authenticate(event) {
        event.preventDefault();
        this.loginService.authenticate(this.loginForm.value.username,this.loginForm.value.password).subscribe(account => {
            this.account = account;
            console.log('Successfully logged',account);
            this.router.navigate(['']);
            this.closeModal = true;
        });

    }

    createUser(event) {
        console.log('test');
        event.preventDefault();
        /*this.usersService.saveUser();*/
        this.closeModal = true;
    }

}
