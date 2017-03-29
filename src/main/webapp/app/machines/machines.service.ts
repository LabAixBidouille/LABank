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

    /*
     * Methode permettant de recuperer toutes les machines retournées par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
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

    /*
     * Methode permettant de recuperer, via le web service, la machine ayant l'id  passé en parametre de la requete http
     */
     getById(id:number):Observable<IMachine> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/machines/'+id).map((res:Response) => {
            return new IMachine(res.json());
        });
    }

    /*
     * Methode permettant d'enregister la machine passée en parametre de la requete http.
     * Cette machine est enregistrée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveMachine(machine:IMachine):Observable<IMachine> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/machines', JSON.stringify(machine),{headers:headers})
            .map((res:Response) => {
                return new IMachine(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications de la machine passée en parametre de la requete http.
     * Cette machine est enregistrée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateMachine(machine:IMachine):Observable<IMachine> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/machines', JSON.stringify(machine),{headers:headers})
            .map((res:Response) => {
                return new IMachine(res.json());
            });
    }

    /*
     * Methode permettant de supprimer la machine passée en parametre de la requete http.
     * Cette machine est supprimée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteMachine(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/machines/'+id, {headers:headers})
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
