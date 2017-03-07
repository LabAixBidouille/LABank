/**
 * Created by kprim on 03/03/2017.
 */

export class IEventType {
    idEventType: number;
    libelle: string;
    constructor(eventType?:{idEventType:number, libelle:string}) {
        if(eventType) {
            _.assignIn(this, eventType);
        }
    }
}