///<reference path="../../../../../typings/lodash/lodash.d.ts" />

export class Account {
    id:number;
   /* sex:string;
    pseudonym:string;
    password:string;
    name:string;
    firstname:string;
    email:string
    birthday:
    address:string;
    phone:number;
    website:string;
    occupation:string;
    interests:string;
    group:string;*/
    profile:string;
    avatar:string;
    login:string;
    authorities:Array<string>;
    authenticated = true;


    constructor(account?:{id:number,login:string,profile:string,authorities:Array<string>}) {
        if(account) {
            _.assignIn(this, account);
            this.authenticated = false;
        }
    }
}
