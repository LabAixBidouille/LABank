import {CSpaceFile} from "./CSpaceFile";
/**
 * Created by Kandel on 03/05/2017.
 */
export class CSpace{
    idSpace:number;
    name:string;
    illustration:string;
    maxTickets:number;
    description:string;
    characteristic:string;
    spaceFiles:Array<CSpaceFile>;

    constructor(space?:{idSpace:number,name:string,illustration:string,maxTickets:number,description:string,
        characteristic:string,spaceFiles:Array<CSpaceFile>}){
        if(space){
            _.assignIn(this,space);
        }
    }
}