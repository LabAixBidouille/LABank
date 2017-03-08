import { NgModule }      from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SignUpComponent } from './sign-up.component';
import { LoginService } from '../login/login.service';

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule, BrowserModule ],
    bootstrap: [ SignUpComponent ],
    declarations: [ SignUpComponent ],
    providers: [ LoginService ]
})
export class SignUpModule { }