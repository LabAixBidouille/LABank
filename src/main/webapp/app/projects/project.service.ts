import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import * as AppUtils from '../utils/app.utils';
import {Observable} from "rxjs/Observable";
import {CProject} from "./CProject";
import {CStep} from "./CStep";
import {CLicence} from "./CLicence";
import {CMaterial} from "./CMaterial";
import {CTheme} from "./CTheme";
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
        console.log(project.projectSteps[0].title);
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


       /********************************************************************
     * Gestion des licences
     ********************************************************************/


    /*
     * Methode permettant de recuperer toutes les licences retournées par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllLicence():Observable<Array<CLicence>>{

        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/licences')
            .map((res:Response) => {
                let licences:Array<CLicence> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    licences.push(new CLicence(jsonResult));
                });
                return licences;
            }).catch(this.handleError);
    }

    getLicence(id: number):Observable<CLicence> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/licences/'+id).map((res:Response) => {
            return new CLicence(res.json());
        });
    }

    /*
     * Methode permettant d'enregister la licence passée en parametre de la requete http.
     * Cette licence est enregistrée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveLicence(licence:CLicence):Observable<CLicence> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/projects/licences', JSON.stringify(licence),{headers:headers})
            .map((res:Response) => {
                return new CLicence(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications de la licence passée en parametre de la requete http.
     * Cette licence est enregistrée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateLicence(licence:CLicence):Observable<CLicence> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/projects/licences', JSON.stringify(licence),{headers:headers})
            .map((res:Response) => {
                return new CLicence(res.json());
            });
    }

    /*
     * Methode permettant de supprimer la licence passée en parametre de la requete http.
     * Cette licence est supprimée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteLicence(idLicence: number) :Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/projects/licences/'+idLicence, {headers:headers})
            .map((res:Response) => {
                let message:boolean ;
                message = res.json();
                return message ;
            });
    }

    /********************************************************************
     * Gestion des materials
     ********************************************************************/


    /*
     * Methode permettant de recuperer tous les materiaux retournées par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllMaterial():Observable<Array<CMaterial>>{

        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/materials')
            .map((res:Response) => {
                let materials:Array<CMaterial> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    materials.push(new CMaterial(jsonResult));
                });
                return materials;
            }).catch(this.handleError);
    }

    getMaterial(id: number):Observable<CMaterial> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/materials/'+id).map((res:Response) => {
            return new CMaterial(res.json());
        });
    }

    /*
     * Methode permettant d'enregister l'objet Material passée en parametre de la requete http.
     * Cet objet est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveMaterial(material:CMaterial):Observable<CMaterial> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/projects/materials', JSON.stringify(material),{headers:headers})
            .map((res:Response) => {
                return new CMaterial(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications de l'objet Material passé en parametre de la requete http.
     * Cet objet est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateMaterial(material:CMaterial):Observable<CMaterial> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/projects/materials', JSON.stringify(material),{headers:headers})
            .map((res:Response) => {
                return new CMaterial(res.json());
            });
    }

    /*
     * Methode permettant de supprimer l'objet passé en parametre de la requete http.
     * Cet objet est supprimé en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteMaterial(idMaterial: number) :Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/projects/materials/'+idMaterial, {headers:headers})
            .map((res:Response) => {
                let message:boolean ;
                message = res.json();
                return message ;
            });
    }

    /********************************************************************
     * Gestion des themes
     ********************************************************************/


    /*
     * Methode permettant de recuperer tous les themes retournés par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllTheme():Observable<Array<CTheme>>{

        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/themes')
            .map((res:Response) => {
                let themes:Array<CTheme> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    themes.push(new CTheme(jsonResult));
                });
                return themes;
            }).catch(this.handleError);
    }

    getTheme(id: number):Observable<CTheme> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/themes/'+id).map((res:Response) => {
            return new CTheme(res.json());
        });
    }

    /*
     * Methode permettant d'enregister le theme passé en parametre de la requete http.
     * Ce theme est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveTheme(theme:CTheme):Observable<CTheme> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/projects/themes', JSON.stringify(theme),{headers:headers})
            .map((res:Response) => {
                return new CTheme(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications du theme passé en parametre de la requete http.
     * Ce theme est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateTheme(theme:CTheme):Observable<CTheme> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/projects/themes', JSON.stringify(theme),{headers:headers})
            .map((res:Response) => {
                return new CTheme(res.json());
            });
    }

    /*
     * Methode permettant de supprimer le theme passée en parametre de la requete http.
     * Ce theme est supprimé en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteTheme(idTheme: number) :Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/projects/themes/'+idTheme, {headers:headers})
            .map((res:Response) => {
                let message:boolean ;
                message = res.json();
                return message ;
            });
    }

    /********************************************************************
     * Gestion des steps
     ********************************************************************/
    /*
     * Methode permettant de recuperer tous les steps retournés par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllStep():Observable<Array<CStep>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/steps')
            .map((res:Response) => {
                let steps:Array<CStep> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    steps.push(new CStep(jsonResult));
                });
                return steps;
            }).catch(this.handleError);
    }


    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erreur Serveur');
    }
}