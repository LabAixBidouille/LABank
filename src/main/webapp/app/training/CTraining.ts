/**
* Created by Kandel HANAFI on 06/03/2017.
*/
export class CTraining {
    id: number;
    name: string;
    illustration: string;
    description: string;
    nbTicket: number;
    display:boolean;

    constructor(training?:{id:number, name:string, illustration:string, description:string, nbTicket?: number, display: boolean}){
        if(training){
            _.assignIn(this, training);
        }
    }
}