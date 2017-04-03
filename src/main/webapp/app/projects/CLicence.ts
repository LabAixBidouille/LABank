/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
export class CLicence{
    idLicence:number;
    name:string;
    description:string;

    constructor(licence?:{idLicence:number,name:string,description:string}){
        if(licence){
            _.assignIn(this,licence);
        }
    }
}