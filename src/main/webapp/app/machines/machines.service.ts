/**
 * Created by kprim on 27/02/2017.
 */
import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import * as AppUtils from '../utils/app.utils';
import {Observable} from 'rxjs/Observable';
import {IMachine} from './IMachine';

@Injectable()
export class MachinesService {
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }

    getAll():Observable<Array<IMachine>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/machines')
            .map((res:Response) => {
                let machines:Array<IMachine> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    machines.push(new IMachine(jsonResult));
                });
                return machines;
            }).catch(this.handleError);
    }

     getById(id:number):Observable<IMachine> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/machines/'+id).map((res:Response) => {
            return new IMachine(res.json());
        });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erreur Serveur');
    }
}
