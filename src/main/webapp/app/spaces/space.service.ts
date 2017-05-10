import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import * as AppUtils from '../utils/app.utils';
import {Observable} from "rxjs/Observable";
import {CSpace} from "./CSpace";
/**
 * Created by Kandel on 03/05/2017.
 */

@Injectable()
export class SpaceService{
    http: Http;

    constructor(http:Http){
        this.http = http;
    }

    /*
     * Methode permettant de recuperer tous les spaces retournés par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAll(): Observable<Array<CSpace>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/spaces')
            .map( (res:Response)=> {
                let spaces:Array<CSpace> = [];
                let jSONResult:Array<any> = res.json();
                for (let space of jSONResult){
                    spaces.push(new CSpace(space));
                }
                return spaces;
            }).catch(this.handleError);
    }

    /*
     * Methode permettant de recuperer, via le web service, le space ayant l'id  passé en parametre de la requete http
     */
    getSpace(id:number): Observable<CSpace> {
        console.log(id);
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/spaces/'+id).map( (res:Response)=> {
            return new CSpace(res.json());
        })
    }

    /*
     * Methode permettant d'enregister le space passé en parametre de la requete http.
     * Ce space est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveSpace(space:CSpace):Observable<CSpace> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/spaces', JSON.stringify(space),{headers:headers})
            .map((res:Response) => {
                return new CSpace(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications du space passé en parametre de la requete http.
     * Ce space est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateSpace(space:CSpace):Observable<CSpace> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/spaces', JSON.stringify(space),{headers:headers})
            .map((res:Response) => {
                return new CSpace(res.json());
            });
    }

    /*
     * Methode permettant de supprimer le space passé en parametre de la requete http.
     * Ce space est supprimé en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteSpace(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/spaces/'+id, {headers:headers})
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