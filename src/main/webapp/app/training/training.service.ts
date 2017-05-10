import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import * as AppUtils from '../utils/app.utils';
import {Observable} from 'rxjs/Observable';

import {CTraining} from "./CTraining";

@Injectable()
export class TrainingService{
    http: Http;

    constructor(http:Http){
        this.http = http;
    }

    /*
     * Methode permettant de recuperer tous les trainings retournés par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
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


    /*
     * Methode permettant de recuperer, via le web service, le training ayant l'id  passé en parametre de la requete http
     */
    getTraining(id:number): Observable<CTraining> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/training/'+id).map( (res:Response)=> {
            return new CTraining(res.json());
        })
    }

    /*
     * Methode permettant d'enregister le training passé en parametre de la requete http.
     * Ce training est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveTraining(training:CTraining):Observable<CTraining> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/trainings', JSON.stringify(training),{headers:headers})
            .map((res:Response) => {
                return new CTraining(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications du training passé en parametre de la requete http.
     * Ce training est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateTraining(training:CTraining):Observable<CTraining> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/trainings', JSON.stringify(training),{headers:headers})
            .map((res:Response) => {
                return new CTraining(res.json());
            });
    }

    /*
     * Methode permettant de supprimer le training passé en parametre de la requete http.
     * Ce training est supprimé en base par le web service dont l'URL est passé en parametre de la requete http.
     */
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

    fileChange(event) {
        let fileList: FileList = event.target.files;
        if(fileList.length > 0) {
            let file: File = fileList[0];
            let formData:FormData = new FormData();
            formData.append('uploadFile', file, file.name);
            let headers = new Headers();
            headers.append('Content-Type', 'multipart/form-data');
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            this.http.post("", formData, options)
                .map(res => res.json())
                .catch(error => Observable.throw(error))
                .subscribe(
                    data => console.log('success'),
                    error => console.log(error)
                )
        }
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erreur Serveur');
    }

}