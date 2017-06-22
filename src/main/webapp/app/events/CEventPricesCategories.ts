/**
 * Created by Kandel on 22/06/2017.
 */
export class CEventPricesCategories{
    idEventPricesCategories:number;
    name:string;
    usageCount:number;
    description:string;

    constructor(eventPricesCategories?:{idEventPricesCategories:number,name:string,usageCount:number,description:string}){
        if(eventPricesCategories){
            _.assignIn(this,eventPricesCategories);
        }
    }
}