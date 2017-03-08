import {Component} from '@angular/core';
import { Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {LoginService} from '../login/login.service';
import {Account} from '../account/account';
import {AccountEventsService} from '../account/account.events.service';

@Component({
    selector: 'sign-up',
    providers: [LoginService],
    templateUrl: './app/signup/sign-up.html'
})
export class SignUpComponent{

}