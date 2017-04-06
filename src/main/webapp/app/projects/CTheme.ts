/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
export class CTheme{
    idTheme:number
    name:string;

    constructor(theme?:{idTheme:number,name:string}){
        if(theme){
            _.assignIn(this,theme);
        }
    }
}