/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
export class CProject{
    idProject:number;
    name:string;
    illustration:string;
    idLicence:number;
    tags:string;
    publish:boolean;
    constructor(project?:{idProject:number,name:string,illustration:string,idLicence:number,tags:string,publish:boolean}){
        if(project){
            _.assignIn(this,project);
        }
    }
}