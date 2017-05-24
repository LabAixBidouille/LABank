import {Component} from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {Account} from '../account/account';
import {AccountEventsService} from '../account/account.events.service';
import{UsersService} from '../users/users.service';
import {CGroup} from "../users/CGroup";
import {CProfile} from "../profile/CProfile";

///<reference path="../../../../../typings/lodash/lodash.d.ts" />

@Component({
    selector: 'headerbar',
    templateUrl: './app/header/header.html',
    providers: [LoginService],
})
export class Header {
    /**Proprietes**/
    authenticated: boolean;
    loginService: LoginService;
    username: string;
    password: string;
    loginForm: FormGroup;

    usersService: UsersService;
    // firstName:string;
    // lastName:string;
    // pseudonym:string;
    // pwd:string;
    // group:string;
    // birthday:string;
    // phone:string;
    signUpForm: FormGroup;

    router: Router;
    wrongCredentials: boolean;
    account: Account;
    error: string;

    closeModal: boolean;
    group: CGroup;

    /** Constructeur **/
    constructor(router: Router, form: FormBuilder, accountEventService: AccountEventsService, loginService: LoginService,
                usersService: UsersService) {
        this.router = router;
        this.wrongCredentials = false;
        this.group = new CGroup();

        this.loginForm = form.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.signUpForm = form.group({
            sex: "",
            pseudonym: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(45)])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(45)])],
            firstname: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(90)])],
            email: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(90)])],
            birthday: "",
            phone: "",

        });

        this.loginService = loginService;
        this.usersService = usersService;
        this.closeModal = false;

        accountEventService.subscribe((account) => {
            if (!account.authenticated) {

                if (account.error) {
                    if (account.error.indexOf('BadCredentialsException') !== -1) {
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

    logout(event: Event): void {
        event.preventDefault();
        this.authenticated = false;
        this.loginService.logout();
    }

    authenticate(event) {
        event.preventDefault();
        this.loginService.authenticate(this.loginForm.value.username, this.loginForm.value.password).subscribe(account => {
            this.account = account;
            console.log('Successfully logged', account);
            this.router.navigate(['']);
            this.closeModal = true;
        });

    }

    createUser() {
        this.account = new Account();

        console.log('test');
        this.account.sex=this.signUpForm.value.sex;
        console.log(this.account.sex);
        this.account.pseudonym = this.signUpForm.value.pseudonym;
        console.log(this.account.pseudonym);
        if(this.signUpForm.value.password === this.signUpForm.value.confirmPassword){
            this.account.password = this.signUpForm.value.password;
        }

        this.account.name = this.signUpForm.value.name;
        console.log(this.account.name);
        this.account.firstname = this.signUpForm.value.firstname;
        console.log(this.account.name);
        this.account.birthday = this.signUpForm.value.birthday;
        console.log(this.account.firstname);
        this.account.phone = this.signUpForm.value.phone;
        console.log(this.account.phone);
        this.account.groupId = this.group.idGroup;
        this.usersService.getProfile(2).subscribe((profile:CProfile)=> this.account.profile = profile);
        this.usersService.saveUser(this.account).subscribe((account:Account)=>this.account = account);
        this.closeModal = true;
    }

    getGroup(group: CGroup) {
        this.group = group;
    }


}
