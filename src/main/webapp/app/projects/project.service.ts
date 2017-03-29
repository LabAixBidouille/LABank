import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import * as AppUtils from '../utils/app.utils';
import {Observable} from "rxjs/Observable";
import {CProject} from "./CProject";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */

@Injectable()
export class ProjectService{
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }

    /*
     * Methode permettant de recuperer tous les projets retournés par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAll():Observable<Array<CProject>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/projects')
            .map((res:Response) => {
                let projects:Array<CProject> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    projects.push(new CProject(jsonResult));
                });
                return projects;
            }).catch(this.handleError);
    }

    /*
     * Methode permettant de recuperer, via le web service, le projet ayant l'id  passé en parametre de la requete http
     */
    getProject(id:number):Observable<CProject> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/projects/'+id).map((res:Response) => {
            return new CProject(res.json());
        });
    }

    /*
     * Methode permettant d'enregister le projet passé en parametre de la requete http.
     * Ce projet est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveProject(project:CProject):Observable<CProject> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/projects', JSON.stringify(project),{headers:headers})
            .map((res:Response) => {
                return new CProject(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications du projet passé en parametre de la requete http.
     * Ce projet est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateProject(project:CProject):Observable<CProject> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/projects', JSON.stringify(project),{headers:headers})
            .map((res:Response) => {
                return new CProject(res.json());
            });
    }

    /*
     * Methode permettant de supprimer le projet passé en parametre de la requete http.
     * Ce projet est supprimé en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteProject(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/projects/'+id, {headers:headers})
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