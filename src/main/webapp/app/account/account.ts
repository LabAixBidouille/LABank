///<reference path="../../../../../typings/lodash/lodash.d.ts" />

import {CGroup} from "../users/CGroup";
import {CProfile} from "../profile/CProfile";
export class Account {
    id:number;
    sex:string;
    pseudonym:string;
    password:string;
    name:string;
    firstname:string;
    email:string;
    birthday:Date;
    address:string;
    phone:number;
    website:string;
    occupation:string;
    interests:string;
    groupId:number;
    profile:CProfile;
    avatar:string;
    login:string;
    authorities:Array<string>;
    authenticated = true;

    constructor(account?:{id:number, sex:string, pseudonym:string, password:string, name:string, firstname:string,
        email:string, birthday:Date, address:string, phone:number, website:string, occupation:string, interests:string,
        groupId:number, profile:CProfile, avatar:string, login:string,authorities:Array<string>}) {
        if(account) {
            _.assignIn(this, account);
            this.authenticated = false;
        }
    }
}
