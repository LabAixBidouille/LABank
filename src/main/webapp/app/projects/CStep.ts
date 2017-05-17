/**
 * Created by Kandel HANAFI on 30/03/2017.
 */
export class CStep{
    idStep:number;
    idProject:number;
    title:string;
    description:string;
    stepsOrder:number;
    illustration:string;

    constructor(step?:{idStep:number,idProject:number,title:string,description:string,stepsOrder:number,illustration:string}){
        if(step){
            _.assignIn(this,step);
        }
    }
}