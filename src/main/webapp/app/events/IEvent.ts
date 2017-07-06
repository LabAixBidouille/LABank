import {CEventPricesCategories} from "./CEventPricesCategories";
/**
 * Created by kprim on 02/03/2017.
 */

export class IEvent {
    idEvent: number;
    title: string;
    illustration: string;
    description: string;
    idEventType: number;
    allDay : boolean;
    startDate: Date;
    endDate : Date;
    startAt : Date; /* TODO : Date or Time ?? */
    endAt : Date;
    idRecurrence : number;
    endRecurrence : Date;
    standardPrice : number;
    reducedFare : number;
    nbTickets : number;
    availableTickets: number;
    facebookShare: number;
    twitterShare: number;
    likes :number;
    idEventTheme : number;
    idAgeRange : number;
    eventPricesCategories: Array<CEventPricesCategories>;
    constructor(event?:{idEvent:number, title:string, illustration:string, description:string,
                        idEventType:number, allDay:boolean, startDate:Date, endDate:Date, startAt:Date,
                        endAt:Date, idRecurrence:number, endRecurrence:Date, standardRecurrence:number,
                        reducedFare:number, nbTickets:number,  availableTickets:number, facebookShare:number,
                        twitterShare:number, likes:number, idEventTheme:number, idAgeRange:number,
                        eventPricesCategories: Array<CEventPricesCategories>}) {
        if(event) {
            _.assignIn(this, event);
        }
    }
}