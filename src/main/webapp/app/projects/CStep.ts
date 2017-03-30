/**
 * Created by Kandel HANAFI on 30/03/2017.
 */
export class CStep{
    idStep:number;
    idProject:number;
    title:string;
    description:string;
    order:number;
    picture:string;

    constructor(step?:{idStep:number,idProject:number,title:string,description:string,order:number,picture:string}){
        if(step){
            _.assignIn(this,step);
        }
    }
}