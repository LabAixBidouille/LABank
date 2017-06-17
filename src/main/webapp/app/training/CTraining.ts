import {IMachine} from "../machines/IMachine";
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
    availableTicket:number;
    facebookShare:number;
    twitterShare:number;
    likes:number;
    associatedMachines:Array<IMachine>;

    constructor(training?:{id:number, name:string, illustration:string, description:string, nbTicket?: number,
        display: boolean, availableTicket:number, facebookShare:number, twitterShare:number, like:number,
        associatedMachines:Array<IMachine>}){
        if(training){
            _.assignIn(this, training);
        }
    }
}