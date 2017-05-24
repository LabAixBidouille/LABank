/**
 * Created by Kandel on 24/05/2017.
 */
export class CEventTheme{
    idEventTheme: number;
    name:string;

    constructor(eventTheme?:{idEventTheme:number, name:string}){
        if(eventTheme){
            _.assignIn(this, eventTheme);
        }
    }
}