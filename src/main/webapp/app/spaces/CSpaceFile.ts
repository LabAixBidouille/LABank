/**
 * Created by Kandel on 10/05/2017.
 */
export class CSpaceFile{
    idSpaceFile:number;
    fileName:string;

    constructor(spaceFile?:{idSpaceFile:number,fileName:string}){
        if(spaceFile){
            _.assignIn(this,spaceFile);
        }
    }

}