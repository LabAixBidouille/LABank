import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import * as AppUtils from '../utils/app.utils';
import {Observable} from 'rxjs/Observable';
import {Account} from '../account/account';
import {CGroup} from "./CGroup";
import {CProfile} from "../profile/CProfile";

@Injectable()
export class UsersService {
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }
    getAll():Observable<Array<Account>> {
        return this.http.get(AppUtils.BACKEND_API_ROOT_URL+'/users')
            .map((res:Response) => {
                let users:Array<Account> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    users.push(new Account(jsonResult));
                });
                return users;
            });
    }
    getById(id:string):Observable<Account> {
        return this.http.get(AppUtils.BACKEND_API_ROOT_URL+'/users/'+id).map((res:Response) => {
            return new Account(res.json());
        });
    }
    getProfiles():Observable<Array<string>> {
        return this.http.get(AppUtils.BACKEND_API_ROOT_URL+'/users/profiles').map((res:Response) => res.json());
    }
    saveUser(account:Account):Observable<Account> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_API_ROOT_URL + '/users/', JSON.stringify(account), {headers: headers})
            .map((res: Response) => {
                return new Account(res.json());
            });
    }
    getAllGroups():Observable<Array<CGroup>>{
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/groups')
            .map((res:Response) => {
                let groups:Array<CGroup> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    groups.push(new CGroup(jsonResult));
                });
                return groups;
            });
    }

    getProfile(id:number):Observable<CProfile>{
        return this.http.get(AppUtils.BACKEND_API_ROOT_URL+'/users/profiles/'+id).map((res:Response) => {
            return new CProfile(res.json());
        });
    }
}
