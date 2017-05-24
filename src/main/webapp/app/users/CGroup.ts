/**
 * Created by Kandel on 22/05/2017.
 */
export class CGroup{
    idGroup:number;
    groupName:string;

    constructor(group?:{idGroup:number, groupName:string}){
        if(group){
            _.assignIn(this,group);
        }
    }
}
