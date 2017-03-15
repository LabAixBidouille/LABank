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
        console.log("TEst getAll");
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
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/training/'+id).map( (res:Response)=> {
            return new CTraining(res.json());
        })
    }

    saveTraining(training:CTraining):Observable<CTraining> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/trainings', JSON.stringify(training),{headers:headers})
            .map((res:Response) => {
                return new CTraining(res.json());
            });
    }

     updateTraining(training:CTraining):Observable<CTraining> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/trainings', JSON.stringify(training),{headers:headers})
            .map((res:Response) => {
                return new CTraining(res.json());
            });
    }

    deleteTraining(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/trainings/'+id, {headers:headers})
            .map((res:Response) => {
               let message:boolean ;
               message = res.json();
               return message ;
            });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erreur Serveur');
    }

}