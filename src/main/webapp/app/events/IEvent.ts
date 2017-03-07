/**
 * Created by kprim on 02/03/2017.
 */

export class IEvent {
    idEvent: number;
    title: string;
    picture: string;
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
    constructor(event?:{idEvent:number, title:string, picture:string, description:string,
                        idEventType:number, allDay:boolean, startDate:Date, endDate:Date, startAt:Date,
                        endAt:Date, idRecurrence:number, endRecurrence:Date, standardRecurrence:number,
                        reducedFare:number, nbTickets:number}) {
        if(event) {
            _.assignIn(this, event);
        }
    }
}