/**
 * Created by kprim on 03/03/2017.
 */
import {Injectable} from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import * as AppUtils from '../utils/app.utils';
import {Observable} from 'rxjs/Observable';
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";

@Injectable()
export class EventsService {
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }

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

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Erreur Serveur');
    }
}
