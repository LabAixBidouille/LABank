/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
export class CProjectFile{
    idProjectFile:number;
    fileName:string;

    constructor(projectFile?:{idProjectFile:number, fileName:string}){
        if(projectFile){
            _.assignIn(this,projectFile);
        }
    }
}
