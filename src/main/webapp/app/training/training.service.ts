import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import * as AppUtils from '../utils/app.utils';
import {Observable} from 'rxjs/Observable';

import {CTraining} from "./CTraining";

@Injectable()
export class TrainingService{
    http: Http;

    constructor(http:Http){
        this.http = http;
    }

    getAll(): Observable<Array<CTraining>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/trainings')
            .map( (res:Response)=> {
                let trainings:Array<CTraining> = [];
                let jSONResult:Array<any> = res.json();
                for (let training of jSONResult){
                    trainings.push(new CTraining(training));
                }
                return trainings;
            }).catch(this.handleError);
    }

    getTraining(id:number): Observable<CTraining> {
        console.log('Test getTraining');
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/training/'+id).map( (res:Response)=> {
            return new CTraining(res.json());
        })
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erreur Serveur');
    }

}