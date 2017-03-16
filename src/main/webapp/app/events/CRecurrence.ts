/**
 * Created by Kandel HANAFI on 15/03/2017.
 */
export class CRecurrence{
    idRecurrence:number;
    type:string;

    constructor(recurrence?:{idRecurrence:number, type:string}){
        if(recurrence){
            _.assignIn(this, recurrence);
        }
    }
}