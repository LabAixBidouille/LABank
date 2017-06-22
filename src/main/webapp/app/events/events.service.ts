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
import {CEventTheme} from "./CEventTheme";
import {CAgeRange} from "./CAgeRange";
import {CEventPricesCategories} from "./CEventPricesCategories";

@Injectable()
export class EventsService {
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }

    /********************************************************************
     *  Gestion des events
     ********************************************************************/

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
     * Methode permettant de recuperer la liste des evenements appartenant au theme dont l'id est passé en
     * parametre de la requete http.
     * Cette liste est retournée par le web service dont l'URL est passé en parametre de la requete http.
     */
    getEventsListByTheme(id:number):Observable<Array<IEvent>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventslist/themes/'+id)
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
     * Methode permettant de recuperer la liste des evenements appartenant a la tranche d'age dont l'id est passé en
     * parametre de la requete http.
     * Cette liste est retournée par le web service dont l'URL est passé en parametre de la requete http.
     */
    getEventsListByAgeRange(id:number):Observable<Array<IEvent>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventslist/ageRanges/'+id)
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
    * Methode permettant de recuperer la liste des evenements appartenant au theme et à la tranche d'age dont les ids
    * sont passés en parametre de la requete http.
    * Cette liste est retournée par le web service dont l'URL est passé en parametre de la requete http.
    */
    getEventsListByThemeAndAgeRange(idTheme:number, idAgeRange:number):Observable<Array<IEvent>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventslist/themes/'+idTheme+'/ageRanges/'+idAgeRange)
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

    /********************************************************************
     *  Gestion des recurrences
     ********************************************************************/

    /*
     * Methode permettant de recuperer toutes les recurrences retournées par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllRecurrence():Observable<Array<CRecurrence>>{
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/recurrences')
            .map((res:Response) => {
                let recurrences:Array<CRecurrence> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    recurrences.push(new CRecurrence(jsonResult));
                });
                return recurrences;
            }).catch(this.handleError);
    }

    /********************************************************************
     *  Gestion des eventType
     ********************************************************************/

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
     * Methode permettant de recuperer le type d'evenement dont l'id est passé en parametre de la requete http.
     * Ce type d'evenement est retourné par le web service dont l'URL est passé en parametre de la requete http.
     */
    getEventType(id:number):Observable<IEventType>{
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventsType/'+id).map( (res:Response) => {
            return new IEventType(res.json());
        })
    }

    /*
     * Methode permettant d'enregister le type d'evenement passé en parametre de la requete http.
     * Ce type d'evenement est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveEventType(eventType:IEventType):Observable<IEventType> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/events/types', JSON.stringify(eventType),{headers:headers})
            .map((res:Response) => {
                return new IEventType(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications du type d'evenement passé en parametre de la requete http.
     * Ce type d'evenement est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateEventType(eventType:IEventType):Observable<IEventType> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/events/types', JSON.stringify(eventType),{headers:headers})
            .map((res:Response) => {
                return new IEventType(res.json());
            });
    }

    /*
     * Methode permettant de supprimer le type d'evenement passé en parametre de la requete http.
     * Ce type d'evenement est supprimé en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteEventType(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/events/types/'+id, {headers:headers})
            .map((res:Response) => {
                let message:boolean ;
                message = res.json();
                return message ;
            });
    }

    /********************************************************************
     *  Gestion des eventTheme
     ********************************************************************/

    /*
     * Methode permettant de recuperer tous les themes d'evenements retournés par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllEventTheme():Observable<Array<CEventTheme>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventsThemes')
            .map((res:Response) => {
                let eventThemes:Array<CEventTheme> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    eventThemes.push(new CEventTheme(jsonResult));
                });
                return eventThemes;
            }).catch(this.handleError);
    }


    /*
     * Methode permettant de recuperer le theme de l'evenement dont l'id est passé en parametre de la requete http.
     * Ce theme est retourné par le web service dont l'URL est passé en parametre de la requete http.
     */
    getEventTheme(id:number):Observable<CEventTheme>{
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventsThemes/'+id).map( (res:Response) => {
            return new CEventTheme(res.json());
        })
    }

    /*
     * Methode permettant d'enregister le theme de l'evenement passé en parametre de la requete http.
     * Ce theme est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveEventTheme(eventTheme:CEventTheme):Observable<CEventTheme> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/events/themes', JSON.stringify(eventTheme),{headers:headers})
            .map((res:Response) => {
                return new CEventTheme(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications du theme passé en parametre de la requete http.
     * Ce theme est enregistré en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateEventTheme(event:CEventTheme):Observable<CEventTheme> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/events/themes', JSON.stringify(event),{headers:headers})
            .map((res:Response) => {
                return new CEventTheme(res.json());
            });
    }

    /*
     * Methode permettant de supprimer le theme passé en parametre de la requete http.
     * Ce theme est supprimé en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteEventTheme(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/events/themes/'+id, {headers:headers})
            .map((res:Response) => {
                let message:boolean ;
                message = res.json();
                return message ;
            });
    }

    /********************************************************************
     *  Gestion des ageRange
     ********************************************************************/

    /*
     * Methode permettant de recuperer toutes les tranches d'age retournées par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllAgeRange():Observable<Array<CAgeRange>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/ageRanges')
            .map((res:Response) => {
                let ageRanges:Array<CAgeRange> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    ageRanges.push(new CAgeRange(jsonResult));
                });
                return ageRanges;
            }).catch(this.handleError);
    }


    /*
     * Methode permettant de recuperer la tranche d'age  dont l'id est passé en parametre de la requete http.
     * Cette tranche d'age est retournée par le web service dont l'URL est passé en parametre de la requete http.
     */
    getAgeRange(id:number):Observable<CAgeRange>{
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/ageRanges/'+id).map( (res:Response) => {
            return new CAgeRange(res.json());
        })
    }

    /*
     * Methode permettant d'enregister la tranche d'age passée en parametre de la requete http.
     * Cette tranche d'age est enregistrée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveAgeRange(ageRange:CAgeRange):Observable<CAgeRange> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/events/ageRanges', JSON.stringify(ageRange),{headers:headers})
            .map((res:Response) => {
                return new CAgeRange(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications de la tranche d'age passée en parametre de la requete http.
     * Cette tranche d'age est enregistrée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateAgeRange(ageRange:CAgeRange):Observable<CAgeRange> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/events/ageRanges', JSON.stringify(ageRange),{headers:headers})
            .map((res:Response) => {
                return new CAgeRange(res.json());
            });
    }

    /*
     * Methode permettant de supprimer la tranche d'age passée en parametre de la requete http.
     * Cette tranche d'age est supprimée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteAgeRange(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/events/ageRanges/'+id, {headers:headers})
            .map((res:Response) => {
                let message:boolean ;
                message = res.json();
                return message ;
            });
    }

    /********************************************************************
     *  Gestion des eventPricesCategories
     ********************************************************************/

    /*
     * Methode permettant de recuperer toutes les categories de prix retournées par le web service dont l'URL est passé
     * en parametre de la requete http.
     */
    getAllEventPricesCategories():Observable<Array<CEventPricesCategories>> {
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventPricesCategories')
            .map((res:Response) => {
                let eventPricesCategories:Array<CEventPricesCategories> = [];
                let jsonResults:Array<any> = res.json();
                jsonResults.forEach((jsonResult) => {
                    eventPricesCategories.push(new CEventPricesCategories(jsonResult));
                });
                return eventPricesCategories;
            }).catch(this.handleError);
    }


    /*
     * Methode permettant de recuperer la categporie de prix  dont l'id est passé en parametre de la requete http.
     * Cette categorie de prix est retournée par le web service dont l'URL est passé en parametre de la requete http.
     */
    getEventPricesCategory(id:number):Observable<CEventPricesCategories>{
        return this.http.get(AppUtils.BACKEND_ROOT_URL+'/eventPricesCategories/'+id).map( (res:Response) => {
            return new CEventPricesCategories(res.json());
        })
    }

    /*
     * Methode permettant d'enregister la categorie de prix passée en parametre de la requete http.
     * Cette categorie de prix est enregistrée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    saveEventPricesCategory(eventPricesCategory:CEventPricesCategories):Observable<CEventPricesCategories> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(AppUtils.BACKEND_ROOT_URL+'/admin/events/eventPricesCategories', JSON.stringify(eventPricesCategory),{headers:headers})
            .map((res:Response) => {
                return new CEventPricesCategories(res.json());
            });
    }

    /*
     * Methode permettant d'enregister les modifications de la categorie de prix passée en parametre de la requete http.
     * Cette categorie de prix est enregistrée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    updateEventPricesCategory(eventPricesCategory:CEventPricesCategories):Observable<CEventPricesCategories> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(AppUtils.BACKEND_ROOT_URL+'/admin/events/eventPricesCategories', JSON.stringify(eventPricesCategory),{headers:headers})
            .map((res:Response) => {
                return new CEventPricesCategories(res.json());
            });
    }

    /*
     * Methode permettant de supprimer la categorie de prix passée en parametre de la requete http.
     * Cette categorie de prix est supprimée en base par le web service dont l'URL est passé en parametre de la requete http.
     */
    deleteEventPricesCategory(id:number):Observable<boolean> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(AppUtils.BACKEND_ROOT_URL+'/admin/events/eventPricesCategories/'+id, {headers:headers})
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
