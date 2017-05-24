/**
 * Created by Kandel on 24/05/2017.
 */
export class CAgeRange{
    idAgeRange:number;
    name:string;

    constructor(ageRange?:{idAgeRange:number,name:string}){
        if(ageRange){
            _.assignIn(this, ageRange);
        }
    }
}