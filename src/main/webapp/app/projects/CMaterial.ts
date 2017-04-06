/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
export class CMaterial{
    idMaterial:number
    name:string;

    constructor(material?:{idMaterial:number,name:string}){
        if(material){
            _.assignIn(this,material);
        }
    }
}