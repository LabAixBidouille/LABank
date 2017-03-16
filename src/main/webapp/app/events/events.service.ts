/**
 * Created by kprim on 03/03/2017.
 */
import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import * as AppUtils from '../utils/app.utils';
import {Observable} from 'rxjs/Observable';
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";
import {CRecurrence} from "./CRecurrence";

@Injectable()
export class EventsService {
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }

    /*
     * Methode permettant de recuperer tous les types d'evenements retournés par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllEventType():Observable<Array<IEventType>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventstype')
            .map((res:Response) => {
                let eventTypes:Array<IEventType> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    eventTypes.push(new IEventType(jsonResult));
                });
                return eventTypes;
            }).catch(this.handleError);
    }

    /*
     * Methode permettant de recuperer la liste des evenements appartenant au type dont l'id est passé en
     * parametre de la requete http.
     * Cette liste est retournée par le web service dont l'URL est passé en parametre de la requete http.
     */
    getEventsListByCategory(id:number):Observable<Array<IEvent>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventslist/'+id)
            .map((res:Response) => {
                let events:Array<IEvent> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    events.push(new IEvent(jsonResult));
                });
                return events;
            }).catch(this.handleError);
    }

    /*
     * Methode permettant de recuperer l'evenement dont l'id est passé en parametre de la requete http.
     * Cet evenement est retourné par le web service dont l'URL est passé en parametre de la requete http.
     */
    getEvent(id:number):Observable<IEvent>{
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/events/'+id).map( (res:Response) => {
            return new IEvent(res.json());
        })
    }

    /*
     * Methode permettant d'enregister l'evenement passé en parametre de la requete http.
     * Cet evenement est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveEvent(event:IEvent):Observable<IEvent> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/events', JSON.stringify(event),{headers:headers})
            .map((res:Response) => {
                return new IEvent(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications de l'evenement passé en parametre de la requete http.
     * Cet evenement est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
     updateEvent(event:IEvent):Observable<IEvent> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/events', JSON.stringify(event),{headers:headers})
            .map((res:Response) => {
                return new IEvent(res.json());
            });
    }

    /*
     * Methode permettant de supprimer l'evenement passé en parametre de la requete http.
     * Cet evenement est supprimé en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteEvent(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/events/'+id, {headers:headers})
            .map((res:Response) => {
               let message:boolean ;
               message = res.json();
               return message ;
            });
    }

    /*
     * Methode permettant de recuperer toutes les recurrences retournées par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllRecurrence():Observable<Array<CRecurrence>>{
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/admin/events/new')
            .map((res:Response) => {
                let recurrences:Array<CRecurrence> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    recurrences.push(new CRecurrence(jsonResult));
                });
                return recurrences;
            }).catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erreur Serveur');
    }
}
